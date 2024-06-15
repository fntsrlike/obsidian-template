module.exports = async (tp) => {
  const journalFileName = tp.date.now("月誌：YYYY 年 MM 月")
  const journalFile = tp.file.find_tfile(journalFileName);
  const journalContent = await this.app.vault.read(journalFile)
  console.log(journalContent)

  const isContentEmptyRegExp = /^\s*$/;
  const templateFileName = 'Monthly Log Template'
  const isJournalFileEmpty = isContentEmptyRegExp.test(journalContent)

  if (isJournalFileEmpty) {
    const template = await tp.file.include(`[[${templateFileName}]]`)
    await this.app.vault.process(journalFile, (data) => (data = template))
  } else {
    console.log('not empty')
  }
}
