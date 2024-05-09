const workspace = this.app.workspace
const vault = this.app.vault
let tp
let tR = ''

// static
const testContentEmpty = (content) => {
  const isContentEmptyRegExp = /^\s*$/
  return isContentEmptyRegExp.test(content)
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
  let { templateFileName, journalDir, journalFileName } = options

  const journalFilePath = `${journalDir}${journalFileName}.md`
  const journalFile = tp.file.find_tfile(journalFilePath);
  const isJournalFileExist = journalFile !== null

  const activeFilePath = tp.file.path(true)
  const activeFile = tp.file.find_tfile(activeFilePath);

  const isActiveFileEmpty = testContentEmpty(tp.file.content)
  const isActiveFileAsJournal = activeFilePath === journalFilePath


  if (isActiveFileEmpty) {
    tR += await getTemplateContent(templateFileName)
  }

  if (isActiveFileAsJournal) {
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
