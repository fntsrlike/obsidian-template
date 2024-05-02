---
aliases: 
  - 人
tags: 
  - types
  - categories
---

# People

[[People Gallery]]

```dataview
table without id
  (file.link) as Person,
  (join(aliases, "、")) as Nickname,
  (birthday) as Birthday,
  (met_on + " @ " + met_occasion) as Met,
  organization as Orgamization,
  summary as Summary
where
  contains(category,this.file.link) and
  !contains(file.name,"Template")
sort file.name asc
```
