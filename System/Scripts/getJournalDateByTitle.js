const dateFormatList = {
  'daily-log': "日誌：YYYY 年 MM 月 DD 日 (dd)",
  'weekly-log': "週誌：YYYY 年 ww 週",
  'monthly-log': "月誌：YYYY 年 MM 月",
}

const getJournalDateByTitle = (tp, journalTitle) => {
  const fileType = tp.user.getFileType(journalTitle)
  const isValid = Object.keys(dateFormatList).includes(fileType)

  return isValid ? moment(journalTitle, dateFormatList[fileType]) : moment()
}

module.exports = getJournalDateByTitle
