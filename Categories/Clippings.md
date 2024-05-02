---
aliases:
  - 剪貼簿
tags:
  - types
  - categories
---

# Clippings

```dataview
table without id
	file.link as Title,
	author as Author,
	created_at as Clipped,
	published_at as Published
where
	contains(category,this.file.link) and
	!contains(file.name, "Template")
sort clipped desc
```
