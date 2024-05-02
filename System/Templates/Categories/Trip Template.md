---
category:
  - "[[Trips]]"
location: []
companion: []
tags:
  - trips
start_on: 
end_on: 
created_cw: <% tp.date.now("YY") + "cw" + tp.date.now("WW") %>
created_at: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z") %>
updated_at: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z") %>
---

# <% tp.file.title %>

<%* await tp.user.archive_file(tp, 'Trips') %>