const fileDir = {
  'daily-log': (momentDate) => momentDate.format("日誌：YYYY 年 MM 月 DD 日 (dd)"),
  'weekly-log': (momentDate) => momentDate.format("週誌：YYYY 年 ww 週"),
  'monthly-log': (momentDate) => momentDate.format("月誌：YYYY 年 MM 月"),
}

const getJournalTitle = (fileType, momentDate) => {
  const isSupport = fileType in fileDir
  return isSupport ? fileDir[fileType](momentDate) : ''
}

module.exports = getJournalTitle
