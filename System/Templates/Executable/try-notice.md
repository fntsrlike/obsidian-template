<%*
  const obsidian = tp.obsidian
  const Notice = obsidian.Notice
  const notice = new Notice("", 15000);

  const message = "Hello, World. Let's make Obsidian plugin?"
  notice.noticeEl.innerHTML = `<b>Yuehu Notice</b>:<br/>${message}`;
  console.warn(`[Warn]: ${message}`)
%>
