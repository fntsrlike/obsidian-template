---
category:
  - "[[Meetings]]"
type: []
organization: []
location: []
people: []
topics: []
tags:
  - meetings
attended_on: <% tp.date.now("YYYY-MM-DD") %>
created_cw: <% tp.date.now("YY") + "cw" + tp.date.now("WW") %>
created_at: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z") %>
updated_at: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z") %>
---

# <% tp.file.title %>

<%* await tp.user.setFileLocation(tp, 'Meetings') %>
