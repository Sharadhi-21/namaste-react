const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
     [React.createElement("h1",{ },"this is my h1 tag"),React.createElement("h2",{ },"this is my h2 tag")])
     ,React.createElement("div",{id:"child2"},
     [React.createElement("h3",{ },"this is my h1 tag"),React.createElement("h4",{ },"this is my h2 tag")])]);
     console.log(parent);
     const root=ReactDOM.createRoot(document.getElementById("root"));
     root.render(parent);
