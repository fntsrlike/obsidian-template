---
aliases:
category:
  - "[[People]]"
avatar:
organization:
birthday:
met_occasion:
met_on: <% tp.date.now("YYYY-MM-DD") %>
linkedin:
facebook:
twitter:
instagram:
tags:
created_cw: <% tp.date.now("YY") + "cw" + tp.date.now("WW") %>
created_at: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z") %>
updated_at: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z") %>
---

# <% tp.file.title %>

## Meetings

```dataview
table without id
	file.link as Meeting,
	date as Date
where
	contains(category,[[Meetings]]) and
	contains(people,this.file.link)
sort file.name desc
```

<%* await tp.user.setFileLocation(tp, 'People') %>
