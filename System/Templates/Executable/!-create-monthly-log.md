<%*
// 測試案例
// - DONE: 當前是空白且月誌不存在，在當前套用樣板；
// - DONE: 當前是空白且當前是月誌，在當前套用樣板；
// - DONE: 當前不是月誌，月誌是空白，在月誌上套用樣板;

const workspace = this.app.workspace
const vault = this.app.vault

const isContentEmptyRegExp = /^\s*$/;
const templateFileName = 'Monthly Log Template'
const templateContent = await tp.file.include(`[[${templateFileName}]]`)
const journalDir = 'Journal/03. Monthly Log/'
const markdownExtension = 'md'

const journalFileName = tp.date.now("月誌：YYYY 年 MM 月")
const journalFilePath = `${journalDir}${journalFileName}.md`
const journalFile = tp.file.find_tfile(journalFilePath);
const isJournalFileExist = journalFile !== null

const activeLeaf = workspace.activeLeaf;
const activeFilePath = tp.file.path(true)
const activeFile = tp.file.find_tfile(activeFilePath);
const isActiveFileEmpty = isContentEmptyRegExp.test(tp.file.content)
const isActiveFileAsJournal = activeFilePath === journalFilePath
console.log(activeFilePath, journalFilePath)

const setSpecificFileActive = (specificFileName) => {
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

const applyTemplateIfJournalEmpty = async () => {
  const journalContent = await vault.read(journalFile)
  const isJournalFileEmpty = isContentEmptyRegExp.test(journalContent)
  if (isJournalFileEmpty) {
    await vault.process(journalFile, (data) => (data = templateContent))
  }
}

console.log(isActiveFileAsJournal)
if (isJournalFileExist && !isActiveFileAsJournal) {
  await applyTemplateIfJournalEmpty()
  setSpecificFileActive(journalFileName)

  if (isActiveFileEmpty, isActiveFileAsJournal) {
    activeLeaf.detach()
    vault.trash(activeFile)
  }

} else {
  if (!isJournalFileExist && !isActiveFileAsJournal) {
    await tp.file.move(`${journalDir}${journalFileName}`)
  }
  
  tR += templateContent
}

%>
