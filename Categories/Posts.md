---
aliases:
  - 文章
tags:
  - types
  - categories
---

# Posts

```dataview
table without id
	file.link as Title,
	status as Status,
	published_at as Published
where
	contains(category,this.file.link) and
	!contains(file.name,"Template")
sort published desc
```
