const archive_file = async (tp, category) => {
    const file_name= tp.file.title
    const cate_dir_mapping = {
        'Books': 'References/Books',
        'Lectures': 'References/Lectures',
        'People': 'References/People',
        'Meetings': 'Journal/Minutes',
        'Clippings': 'Clippings',
        'Trips': "Notes",
    }

    console.log('cate:' + category)

    if (category in cate_dir_mapping) {
        await tp.file.move(`${cate_dir_mapping[category]}/${file_name}`)
    }
}

module.exports = archive_file;