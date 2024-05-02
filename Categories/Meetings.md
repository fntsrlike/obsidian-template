---
aliases:
  - 會議
  - 對話
tags:
  - types
  - categories
---

# Meetings

```dataview
table without id
	file.link as Meeting,
	type as Type,
	people as People,
	attended as Date
where 
	contains(category,this.file.link) and
	!contains(file.name,"Template")
sort date desc
limit 100
```
