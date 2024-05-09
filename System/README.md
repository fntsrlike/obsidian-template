---
aliases: 
tags: 
created_cw: 24cw18
created_at: 2024-05-01 15:34:10 +08:00
updated_at: 2024-05-01 15:34:10 +08:00
---

# README

## Directory Structure

### Chunk

- `Attachment/`: 附件
- `Categories/`: 筆記類型定義
- `Clipping/`: 網路擷取資料
- `Notes/`: 一般筆記
- `Journal/`: 任務、專案、會議記錄、事件
- `References/`: 任何存在於 Vault 之外的人事物，如專輯、電影、食譜
- `System`: 系統相關設定、模板、腳本

Inspired by

- [AnyType - The Everything App](https://anytype.io)
- [Obsidian Vault Template — Steph Ango](https://stephango.com/vault)

### Sub

#### Attachments

- `note-only`: 若該筆記有指定附件要分開存放，就會按照其路徑存在這
- `references`: 放置 References 相關的資源，如書籍、講義等
- `shared`: 沒有特別設定都會放在這，其中又分為
  - `documents`: 文件類型，如 `pdf`, `doc`, `ppt`
  - `images`: 圖片類型，如 `jpg`, `png`
  - `videos`: 影片類型，如 `mp4`

#### Notes

- `_Inbox/`: 筆記預設存放位置
- `Area-XXXXX/`: 某個領域的相關資料

#### Journal

- `Projects/`: 專案
- `Minutes/`: 會議或對談紀錄
- `Daily Log/`: 日誌
- `Monthly Log/`: 月誌
- `Future Log`: 未來誌
- `Backlog`: 待辦事項

#### System

- `Reports`: 系統報告，如孤立文件、空間使用量
- `Scripts`：Templater 會用到的腳本檔
- `Templates`: 放置各類模板，可以使用子目錄分類

