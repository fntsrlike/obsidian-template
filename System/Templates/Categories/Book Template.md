---
category:
  - "[[Books]]"
title: <% tp.file.title %>
main_title: ""
sub_title: ""
aliases: []
translation: []
author: []
cover: ""
isbn: ""
isbn13: ""
year:
rating:
topics: []
calibre: ""
tags:
  - books
  - references
  - to-read
published_on:
last_read_at:
created_cw: <% tp.date.now("YY") + "cw" + tp.date.now("WW") %>
created_at: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z") %>
updated_at: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z") %>
---

# <% tp.file.title %>

| calibre |

<%* await tp.user.setFileLocation(tp, 'Books') %>
