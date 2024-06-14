const workspace = app.workspace
const vault = app.vault
let tp
let tR = ''

const journalTemplateName = {
  daily: 'Daily Log Template',
  weekly: 'Weekly Log Template',
  monthly: 'Monthly Log Template',
}

const journalDir = {
  daily: 'Journal/01. Daily Log/',
  weekly: 'Journal/02. Weekly Log/',
  monthly: 'Journal/03. Monthly Log/',
}

const journalFileNameFormatRegExp = {
  daily: /^日誌：\d{4} 年 \d{2} 月 \d{2} 日 \([一二三四五六日]\)$/,
  weekly: /^週誌：\d{4} 年 \d{2} 週$/,
  monthly: /^月誌：\d{4} 年 \d{2} 月$/,
}

const throwError = (errorMessage) => {
  console.error(errorMessage)
  throw errorMessage
}

// static
const testContentEmpty = (content) => {
  const isContentEmptyRegExp = /^\s*$/
  return isContentEmptyRegExp.test(content)
}

const testValidJournalFormat = (filename) => {
  return !!getJournalType(filename)
}

const getJournalType = (filename) => {
  if (journalFileNameFormatRegExp['daily'].test(filename)) {
    return 'daily'
  }

  if (journalFileNameFormatRegExp['weekly'].test(filename)) {
    return 'weekly'
  }

  if (journalFileNameFormatRegExp['monthly'].test(filename)) {
    return 'monthly'
  }

  return false
}

const getJournalDir = (journalType) => {
  if (journalType in journalDir) {
    return journalDir[journalType]
  }
  throwError(`Error: undefined journal type! please check file name: '${journalFileName}'`)
}

const getJournalTemplateName = (journalType) => {
  if (journalType in journalTemplateName) {
    return journalTemplateName[journalType]
  }
  throwError(`Error: undefined journal type! please check file name: '${journalFileName}'`)
}

// depends on tp
const getTemplateContent = async (templateFileName) => {
  return await tp.file.include(`[[${templateFileName}]]`)
}

// depends on workspace
const setSpecificFileActive = (specificFileName, journalFile) => {
  let isJournalFileOpening = false
  workspace.iterateAllLeaves((leaf) => {
    if (leaf.getViewState().type === "markdown") {
      const leafViewFilename = leaf.view.file.basename
      if (leafViewFilename === specificFileName) {
        workspace.setActiveLeaf(leaf)
        isJournalFileOpening = true
      }
    }
  })
  if (!isJournalFileOpening) {
    workspace.getLeaf(true).openFile(journalFile);
  }
}

// depends on vault
const applyTemplateIfJournalEmpty = async (journalFile, templateFileName) => {
  const journalContent = await vault.read(journalFile)
  const templateContent = await getTemplateContent(templateFileName)
  const isJournalFileEmpty = testContentEmpty(journalContent)
  if (isJournalFileEmpty) {
    await vault.process(journalFile, (data) => (data = templateContent))
  }
}

const create_journal_log = async (_tp, options) => {
  tp = _tp
  let { journalFileName } = options

  if (!testValidJournalFormat(journalFileName)) {
    throwError(`Error: undefined expect journal type! please check file name: '${journalFileName}'`)
  }

  const expectJournalType = getJournalType(journalFileName)
  const templateFileName = getJournalTemplateName(expectJournalType)
  const journalDir = getJournalDir(expectJournalType)

  const journalFilePath = `${journalDir}${journalFileName}.md`
  const journalFile = tp.file.find_tfile(journalFilePath);
  const isJournalFileExist = journalFile !== null

  const activeFilePath = tp.file.path(true)
  const activeFileName = tp.file.title
  const activeFile = tp.file.find_tfile(activeFilePath);

  const isActiveFileEmpty = testContentEmpty(tp.file.content)
  const isActiveFileAsJournal = activeFilePath === journalFilePath


  if (isActiveFileEmpty) {
    tR += await getTemplateContent(templateFileName)
  }

  if (isActiveFileAsJournal) {
    return tR
  }

  if (testValidJournalFormat(activeFileName)) {
    const journalType = getJournalType(activeFileName)
    const dir = getJournalDir(journalType)
    console.log(`${dir}${activeFileName}`)
    await tp.file.move(`${dir}${activeFileName}`)
    return tR
  }

  if (!isJournalFileExist) {
    await tp.file.move(`${journalDir}${journalFileName}`)
    return tR
  }

  if (isActiveFileEmpty) {
    workspace.activeLeaf.detach()
    vault.trash(activeFile)
  }

  await applyTemplateIfJournalEmpty(journalFile, templateFileName)
  setSpecificFileActive(journalFileName, journalFile)
  return tR
}

module.exports = create_journal_log;
