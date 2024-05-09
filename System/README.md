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

## Theme

### Minimal Theme

- Docs: <https://minimal.guide/home>
- Install Theme `Minimal`
- Install Plugins `Minimal Theme Setting`
- Install Plugins `Style Settings` (optional)
- Install Plugins `Hider` (optional)

## Plugins

### Editor

1. `Advanced Tables`: 更方便製作 Markdown-based 的表格
2. `Auto Link Title`: 貼上連結時會自動擷取標題
3. `Dataview`: 把筆記當作資料庫使用
4. `Emoji Autocomplete`: 透過 `:` 去加入表情符號
5. `Link with alias`: 在設置別名時，會反向到該筆記新增此別名
6. `Linter`: 用來規範 Markdown 語法
7. `Mousewheel Image zoom`: 調整圖片大小
8. `Influx`: 顯示該筆記的反向連結
9. `Sort and Permute lines`: 排序指定範圍
10. `Templater`: 更進階的模板功能，甚至用 JavaScript 寫腳本

### File Management

1. `Attachment Management`: 管裡附件位置
2. `File Explorer Note Count`: 顯示資料夾下有多少筆記
3. `Find orphaned files and broken links`: 尋找孤立或是連結失效的筆記
4. `Recent Files`: 列出最近開啟過的檔案
5. `Trash Explorer`: 檢視丟進 Obsidian Trash 的檔案清單
6. `UNITADE.md`: 新增其他副檔名的識別，像是 txt

### System

1. `Obsidian Git`: 版本控制
2. `Hider`: 隱藏介面上的相關元件
3. `Minimal Theme Settings`: 用來設置 Minimal Theme
4. `Style Setting`: 可以修改 CSS 變數，我主要用來客製化 Minimal Theme 更多樣式細節

## Setup

### Plugin: Attachment Management [docs](https://github.com/kepano/obsidian-minimal-settings)

Add extension overrides:
- images: `tiff|jpge?|png|gif|bmp|svg|webp|heic`
- docs: `pdf|docx?|xlsx?|pptx?|pages`
- videos: `mp4|mov|wmv|avi|flv|`

