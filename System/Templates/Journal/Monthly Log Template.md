---
created_cw: <% tp.date.now("YY") + "cw" + tp.date.now("WW") %>
created_at: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z") %>
updated_at: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z") %>
journal_at: <% moment(tp.file.title, "月誌：YYYY 年 MM 月").startOf('month').format("YYYY-MM-DD") %>
---

<%*
const getJournalDate = (dateString) => {
  const dateRegExp = /^月誌：\d{4} 年 \d{2} 月$/
  const dateFormat = "月誌：YYYY 年 MM 月"
  const isValid = dateRegExp.test(dateString)
  return isValid ? moment(dateString, dateFormat) : moment()
}

let thisMonth = getJournalDate(tp.file.title)
let lastMonth = getJournalDate(tp.file.title).subtract(1, 'months')
let nextMonth = getJournalDate(tp.file.title).add(1, 'months')
%>

# <% thisMonth.format(`月誌：YYYY 年 MM 月`) %>

| [[<% lastMonth.format(`月誌：YYYY 年 MM 月`) %>|Last Month]] | This Month | [[<% nextMonth.format(`月誌：YYYY 年 MM 月`) %>|Next Month]] | [[Future Log]] |

## 日曆頁

## 任務頁
