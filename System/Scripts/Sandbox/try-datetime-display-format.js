module.exports = (tp) => {
  const texts = [
    tp.date.now(`日誌：YYYY 年 MM 月 DD 日 d`),
    tp.date.now(`日誌：YYYY 年 MM 月 DD 日 (dd)`),
    tp.date.now(`日誌：YYYY 年 MM 月 DD 日 ddd`),
    tp.date.now(`日誌：YYYY 年 MM 月 DD 日 dddd`),
  ]
  texts.forEach(text => console.log(text))
}
