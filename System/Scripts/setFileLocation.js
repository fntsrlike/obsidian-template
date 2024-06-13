const setFileLocation = async (_tp, specificFileType = '') => {
  const tp = _tp
  const script = tp.user
  const file = tp.file
  const activeFileName = tp.file.title
  const activeFileType = specificFileType || script.getFileType(activeFileName);

  const expectedFileLocation = await script.getFileLocate(activeFileType)
  const expectedFilePath = `${expectedFileLocation}${activeFileName}.md`

  if (expectedFileLocation) {
    const activeFilePath = file.path(true)
    const isActiveFileLocateCorrect = activeFilePath === expectedFilePath

    if (!isActiveFileLocateCorrect) {
      let path = `${expectedFileLocation}${activeFileName}`
      if (await app.vault.exists(expectedFilePath)) {
        const newFileName = `${activeFileName}_${moment().format('YYYYMMDD')}`
        path = `${expectedFileLocation}${newFileName}`
      }
      await file.move(path)
    }
  }
}

module.exports = setFileLocation
