---
aliases:
  - 課程
  - 講座
tags:
  - types
  - categories
---

# Books

```dataview
table without id
	file.link as Lecture,
	lecturer as Lecturer,
	learned_on as Learned,
	created_at as Added
where
	contains(category, this.file.link) and
	!contains(file.name, "Template")
sort rating desc, published_at asc
```


