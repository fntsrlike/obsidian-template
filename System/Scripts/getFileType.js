const fileNameFormatRegExp = {
  'daily-log': /^日誌：\d{4} 年 \d{2} 月 \d{2} 日 \([一二三四五六日]\)$/,
  'weekly-log': /^週誌：\d{4} 年 \d{2} 週$/,
  'monthly-log': /^月誌：\d{4} 年 \d{2} 月$/,
  'books': /^《.+》$/,
  'people': /^@.+$/,
}

const getFileType = (filename) => {
  for (let type in fileNameFormatRegExp) {
    if (fileNameFormatRegExp[type].test(filename)) {
      return type
    }
  }

  return ''
}

module.exports = getFileType
