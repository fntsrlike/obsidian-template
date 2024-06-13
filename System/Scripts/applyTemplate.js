const applyTemplate = async (tp) => {
  const activeFileName = tp.file.title
  const activeFileType = tp.user.getFileType(activeFileName)
  const isFileTypeSupport = !!activeFileType

  if (!isFileTypeSupport) {
    tp.user.sentNotice(tp, `File "${activeFileName}" has no any type mapping!<br/>Applied basic template instead.`, 'WARN')
  }
  await tp.user.setFileLocation(tp)
  return await tp.user.setFileTemplate(tp)
}
module.exports = applyTemplate
