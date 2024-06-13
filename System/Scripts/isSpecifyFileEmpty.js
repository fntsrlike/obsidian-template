const isSpecifyFileEmpty = async (tFile) => {
  const fileContent = await app.vault.read(tFile)
  const isContentEmptyRegExp = /^\s*$/
  return isContentEmptyRegExp.test(fileContent)
}

module.exports = isSpecifyFileEmpty
