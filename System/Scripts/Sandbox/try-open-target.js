module.exports = (tp) => {
  const targetNote = tp.file.find_tfile('Basic Template.md') // TFile instance
  app.workspace.getLeaf(true).openFile(targetNote)
}
