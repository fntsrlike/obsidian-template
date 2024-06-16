---
created_cw: <% tp.date.now("YY") + "cw" + tp.date.now("WW") %>
created_at: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z") %>
updated_at: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z") %>
journal_at: <% tp.user.getJournalDateByTitle(tp, tp.file.title).startOf('month').format("YYYY-MM-DD") %>
---

# <% tp.file.title %>

<%*
const journalTitle = tp.file.title

let startOfMonth = tp.user.getJournalDateByTitle(tp, journalTitle).startOf('month')
let endOfMonth = tp.user.getJournalDateByTitle(tp, journalTitle).endOf('month')
let thisMonth = tp.user.getJournalDateByTitle(tp, journalTitle)
let lastMonth = tp.user.getJournalDateByTitle(tp, journalTitle).subtract(1, 'months')
let nextMonth = tp.user.getJournalDateByTitle(tp, journalTitle).add(1, 'months')

const calendarItem = (momentDate) => {

}
-%>

<%*
let links = [
  `[[${lastMonth.format('月誌：YYYY 年 MM 月')}|👈 ${lastMonth.format(`MM 月 `)}]]`,
  `${thisMonth.format('YYYY 年 MM 月')}`,
  `[[${nextMonth.format(` 月誌：YYYY 年 MM 月 `)}|${nextMonth.format(`MM 月 `)} 👉]]`,
  `[[Future Log]]`,
]

tR += '| ' + links.join(' | ') + ' |'
-%>

## Timeline

<%*
let date = moment(startOfMonth)
while(date <= endOfMonth) {
  tR += `- [[${tp.user.getJournalTitle('daily-log', date)}|${date.format("MM/DD (dd)")}]]: \n`
  date.add(1, 'days')
}
-%>

## Task List

- [ ] Some Task

詳細語法可參見 [[SYNTAX#Check List]]。

## Notes

```dataview
LIST
FROM "Notes" OR "References" OR "Journal/Minutes"
 OR "Journal/Projects"
WHERE dateformat(date(created_at), "yyyy-MM") = dateformat(date(this.file.journal_at), "yyyy-MM")
```
