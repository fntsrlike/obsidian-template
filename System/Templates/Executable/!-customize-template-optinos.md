<%*
const journals = {
  'auto-apply': `Apply Template by Title`,
  'daily-log': `Today's Journal`,
  'weekly-log': `Week's Journal`,
  'monthly-log': `Month's Journal`,
}

options = await tp.system.suggester(Object.values(journals), Object.keys(journals))

const apply = async (option) => {
  if (option === 'auto-apply') {
    return await tp.user.applyTemplate(tp)
  }

  if (option in journals) {
    const noteType = option
    console.log(noteType)
    return await tp.user.createJournal(tp, noteType)

  }
  return ''
}

tR += await apply(options)
%>
