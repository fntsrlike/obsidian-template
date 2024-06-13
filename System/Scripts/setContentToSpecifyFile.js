const workspace = app.workspace
const vault = app.vault

const appendContentToSpecifyFile = async (tFile, templateContent) => {
  await vault.process(tFile, (data) => (data += templateContent))
}

const createJournal = async (_tp, expectedType = 'daily-log') => {
  const tp = _tp
  const script = tp.user

  const activeFileModule = tp.file
  const activeFileName = activeFileModule.title
  const activeTFile = tp.file.find_tfile(activeFileName);

  const journalDir = script.getFileLocate(expectedType)
  const journalFileName = script.getJournalTitle(expectedType, moment())
  const journalTFile = tp.file.find_tfile(journalFileName);
  const isJournalFileExist = journalTFile !== null

  const expectedFileTemplate = await script.getTemplateContent(expectedType,  tp)

  const isActiveFileEmpty = await script.isSpecifyFileEmpty(activeTFile)
  const isFileEqualTodayLog = (activeFileName === journalFileName)

  if (isFileEqualTodayLog) {
    return isActiveFileEmpty ? expectedFileTemplate : ''
  }

  if (isActiveFileEmpty) {
    console.log('Active file is empty, delete it')
    workspace.activeLeaf.detach()
    vault.delete(activeTFile)
  }

  if (!isJournalFileExist) {
    await tp.file.create_new(expectedFileTemplate, journalFileName, true, journalDir)
    return ''
  }

  if (await isSpecifyFileEmpty(journalTFile)) {
    await appendContentToSpecifyFile(journalTFile, expectedFileTemplate)
  }
  script.setSpecificFileActive(journalFileName, journalTFile)
}

module.exports = createJournal;
