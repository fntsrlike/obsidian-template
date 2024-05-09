<%*
const templateFileName = 'Monthly Log Template'
const journalDir = 'Journal/03. Monthly Log/'
const journalFileName = tp.date.now("月誌：YYYY 年 MM 月")

tR += await tp.user.create_journal_log(tp, {templateFileName, journalDir, journalFileName})
%>
