const updateTimestamps = async (tp) => {

  const isInvalid = (property) => {
    return !property || property === 'Invalid date'
  }

  const file = tp.file.find_tfile(tp.file.path(true));

  await app.fileManager.processFrontMatter(file, (frontmatter) => {
      if (isInvalid(frontmatter["created_at"])) {
        frontmatter["created_at"] = tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z")
        frontmatter["created_cw"] = tp.file.creation_date("YY[cw]WW")
      }

      if ('journal_at' in frontmatter && isInvalid(frontmatter["journal_at"])) {
        frontmatter["journal_at"] = moment(tp.file.title, "日誌：YYYY 年 MM 月 DD 日 (dd)").format("YYYY-MM-DD")
      }

      frontmatter["updated_at"] = tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z");
  });

  return ''
}

module.exports = updateTimestamps;
