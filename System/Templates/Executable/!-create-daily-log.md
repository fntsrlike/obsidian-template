<%*
const templateFileName = 'Daily Log Template'
const journalDir = 'Journal/01. Daily Log/'
const journalFileName = tp.date.now("日誌：YYYY 年 MM 月 DD 日 (dd)")

tR += await tp.user.create_journal_log(tp, {templateFileName, journalDir, journalFileName})
%>
