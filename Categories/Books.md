---
aliases:
  - 書
  - 書籍
tags:
  - types
  - categories
---

# Books

```dataview
table without id
	file.link as Book,
	author as Author,
	rating as Rating,
	yaer as Year,
	created_at as Added
where
	contains(category, this.file.link) and
	!contains(file.name, "Template")
sort rating desc, published_at asc
```


