const workspace = app.workspace

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

module.exports = setSpecificFileActive;
