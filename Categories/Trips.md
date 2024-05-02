---
aliases:
  - 旅行
  - 旅程
tags:
  - types
  - categories
---

# Trips

```dataview
table without id
	file.link as Trip,
	location as Location,
	start_on as Start,
	end_on as End
where
	contains(category,this.file.link) and
	!contains(file.name, "Template") and
	!contains(file.name, "Planning")
sort start desc
```
