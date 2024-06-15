<%*
const optionList = app.vault.getFolderByPath('System/Scripts/Sandbox').children.map((taFile) => taFile.name.replace(/\.js$/, '') ).sort()
const selectedOption = await tp.system.suggester(optionList, optionList)

const apply = async (option) => {
  if (optionList.includes(option)) {
    console.log(`Executive '${option}'...`)
    const result = await tp.user[option](tp)
    console.log(`Finished '${option}'!`)
    return result || ''
  }
  return ''
}

tR += await apply(selectedOption)
%>
