
<%*
let today = moment(tp.file.title, "日誌：YYYY 年 MM 月 DD 日 (dd)")
let yesterday = moment(tp.file.title, "日誌：YYYY 年 MM 月 DD 日 (dd)").subtract(1, 'd')
let tomorrow = moment(tp.file.title, "日誌：YYYY 年 MM 月 DD 日 (dd)").add(1, 'd')
let thisMonth = tp.user.getJournalTitle('monthly-log', moment())
console.log(today, yesterday, tomorrow)
%>

// Date now
<% today.format("YYYY-MM-DD") %>
<% yesterday.format("YYYY-MM-DD") %>
<% tomorrow.format("YYYY-MM-DD") %>
<% thisMonth %>