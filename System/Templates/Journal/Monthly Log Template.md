---
created_cw: <% tp.date.now("YY") + "cw" + tp.date.now("WW") %>
created_at: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z") %>
updated_at: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z") %>
journal_at: <% moment(tp.file.title, "月誌：YYYY 年 MM 月").startOf('month').format("YYYY-MM-DD") %>
---

# <% tp.date.now(`月誌：YYYY 年 MM 月`) %>

## 日曆頁

## 任務頁
