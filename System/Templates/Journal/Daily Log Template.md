---
created_cw: <% tp.date.now("YY") + "cw" + tp.date.now("WW") %>
created_at: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z") %>
updated_at: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z") %>
journal_at: <% moment(tp.file.title, "日誌：YYYY 年 MM 月 DD 日 (dd)").format("YYYY-MM-DD") %>
---

<%*
  const getJournalDate = (dateString) => {
  const dateRegExp = /^日誌：\d{4} 年 \d{2} 月 \d{2} 日 \([一二三四五六日]\)$/
  const dateFormat = "日誌：YYYY 年 MM 月 DD 日 (dd)"
  const isValid = dateRegExp.test(dateString)
  return isValid ? moment(dateString, dateFormat) : moment()
}

let today = getJournalDate(tp.file.title)
let yesterday = getJournalDate(tp.file.title).subtract(1, 'days')
let tomorrow = getJournalDate(tp.file.title).add(1, 'days')
%>

# <% today.format(`日誌：YYYY 年 MM 月 DD 日 dddd`) %>

| <% today.format(`YYYY 年`) %> | [[<% today.format(`月誌：YYYY 年 MM 月`) %>|<% today.format(`MM 月`) %>]] | [[<% today.format(`週誌：YYYY 年 ww 週`) %>|<% today.format(`ww 週`) %>]] | [[<% yesterday.format(`日誌：YYYY 年 MM 月 DD 日 (dd)`) %>| 👈 <% yesterday.format(`MM/DD (dd)`) %>]] | Today | [[<% tomorrow.format(`日誌：YYYY 年 MM 月 DD 日 (dd)`) %>|<% tomorrow.format(`MM/DD (dd)`) %> 👉]] | [[Future Log]] |

## Log

- [ ] 任務：Things we have to act on
- 記事：Things we want to remember
- [i] 事件：Things we experience

詳細語法可參見 [[SYNTAX#Check List]]。

## Notes

```dataview
LIST
FROM "Notes" OR "References" OR "Journal/Minutes"
 OR "Journal/Projects"
WHERE dateformat(date(created_at), "yyyy-MM-DD") = dateformat(date(this.file.journal_at), "yyyy-MM-DD")
```
