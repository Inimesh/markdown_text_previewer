import React, { useState } from 'react';

import marked from 'marked';

import './App.css';


// Rendred by Editor. This runs a markdown interpreter and displays text.
const Viewer = (props) => {

    const getMarkdownText = () => {
        let rawMarkup = marked(props.text, {sanitize: true});
        return { __html: rawMarkup };
    }

    return (
        <>
        <p id="viewer"
            className="window"
            dangerouslySetInnerHTML={getMarkdownText()}
        />
        </>
    )
}

// Renderd by App. This component handles text input and stores in state.
// Child component: Viewer which inherits the input text.
const Editor = () => {

    const [inputText, changeInputText] = useState(defaultText);


    const handleChange = (event) => {
        changeInputText(prevText => event.target.value);
    }

    return (
        <>
        <textarea
            id="textInput"
            className="window"
            value={inputText}
            onChange={handleChange}
        />
        <Viewer text={inputText}/>
        </>
    )
}

// 'Top Level' component that renders the Editor component.
const App = () => {

    return (
        <div id="editor">
        <Editor />
        </div>
    )
};

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://en.wikipedia.org/wiki/Main_Page), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Kitten](https://www.petmd.com/sites/default/files/styles/article_image/public/small-kitten-walking-towards_127900829_0.jpg?itok=ah_gTtbS)
`;

export default App;
