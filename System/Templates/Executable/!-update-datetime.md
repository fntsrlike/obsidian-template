<%*
const file = tp.file.find_tfile(tp.file.path(true));
await app.fileManager.processFrontMatter(file, (frontmatter) => {            
    if (!frontmatter["created_at"]) {                
        frontmatter["created_cw"] = tp.date.now("YY") + "cw" + tp.date.now("WW");
        frontmatter["created_at"] = tp.file.creation_date("YYYY-MM-DD HH:mm:ss Z");
    }
    frontmatter["updated_at"] = tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss Z");
});
%>