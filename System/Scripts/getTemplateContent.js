const getTemplateName = (type) => {
  return type.split('-').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ') + ' Template'
}

const getTemplateContent = async (fileType, _tp) => {
  const templateFileName = getTemplateName(fileType)
  const tp = _tp
  const isSupport = tp.file.find_tfile(templateFileName)

  return isSupport ? await tp.file.include(`[[${templateFileName}]]`) : ''
}

module.exports = getTemplateContent
