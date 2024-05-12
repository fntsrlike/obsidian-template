---
aliases:
  - 人
tags:
  - types
  - categories
cssclasses:
  - cards
  - cards-1-1
  - cards-cols-4
---

# People Gallery

[[People]]

```dataview
table without id
  embed(link(avatar)) as Cover,
  (file.link) as Person,
  (join(aliases, "、")) as Nickname,
  ("🎂 " + birthday) as Birthday,
  ("🧭 " + met_on + " @ " + met_occasion) as Met,
  organization as Orgamization,
  summary as Summary,
  filter(file.tags, (t) => t !="#people") as Tags 
where
  contains(category, [[People]]) and
  !contains(file.name,"Template")
```
