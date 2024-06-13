const fileDir = {
  'daily-log': 'Journal/01. Daily Log/',
  'weekly-log': 'Journal/02. Weekly Log/',
  'monthly-log': 'Journal/03. Monthly Log/',
  'books': 'References/Books/',
  'lectures': 'References/Lectures/',
  'people': 'References/People/',
  'meetings': 'Journal/Minutes/',
  'clippings': 'Clippings/',
  'trips': "Notes/",
}

const getFileLocate = (fileType) => {
  const regularFileType = fileType.toLowerCase()
  const isSupport = regularFileType in fileDir
  return isSupport ? fileDir[regularFileType] : ''
}

module.exports = getFileLocate
