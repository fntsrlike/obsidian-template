const sentNotice = (tp, message, level = 'INFO') => {
    const notice = new Notice("", 15000);
    notice.noticeEl.innerHTML = `<b>Templater ${level}</b>:<br/>${message}`;
    console.warn(`[${level}] ${message}`)
}
module.exports = sentNotice
