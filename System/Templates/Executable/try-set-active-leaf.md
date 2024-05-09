<%*
  app.workspace.iterateAllLeaves((leaf) => {
    if (leaf.getViewState().type === "markdown") {
      filename = leaf.view.file.basename
      console.log(filename)
      if (filename === 'to-active') {
        app.workspace.setActiveLeaf(leaf)
      }
    }
  })
%>
