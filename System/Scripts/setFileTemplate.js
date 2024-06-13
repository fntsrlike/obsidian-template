const setFileTemplate = async (_tp) => {
  let responseContent = ''

  const tp = _tp
  const script = tp.user
  const activeFileName = tp.file.title
  const activeFileType = tp.user.getFileType(activeFileName)
  const activeTFile = tp.file.find_tfile(activeFileName);

  const isActiveFileEmpty = await script.isSpecifyFileEmpty(activeTFile)

  const basicTemplate = await script.getTemplateContent('basic',  tp)
  const expectedFileTemplate = await script.getTemplateContent(activeFileType,  tp) || basicTemplate

  if (isActiveFileEmpty && expectedFileTemplate) {
    responseContent = expectedFileTemplate
  }

  return responseContent
}

module.exports = setFileTemplate
