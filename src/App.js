import React, { useState } from 'react';

import { marked } from 'marked';

import './App.css';

// TODO: Figure out how to do code highlighting

// Parent component that houses state and renders the Editor and Previewer.
const App = () => {

    const [inputText, changeInputText] = useState(defaultText);

    const alterText = (event) => {
        changeInputText(() => event.target.value)
    }

    return (
        <div id="app">
            <h1 id="page_title">Markdown Previewer</h1>

            <Editor
                inputText={inputText}
                inputTextChange={alterText}/>

            <span className="window_divider"></span>

            <Previewer
                markdown={inputText}/>

            <footer></footer>
        </div>
    )
};



// Rendered by App. Renders ToolBar. Component in which you can change the
// input text
const Editor = (props) => {

    return (
        <div id="editor_window" className="window">
            <ToolBar title="Editor"/>
            <textarea id="input_text_area"
                value={props.inputText}
                onChange={props.inputTextChange}
                >{props.inputText}</textarea>
        </div>
    )
};

// Rendered by App. Renders ToolBar. Component in which you preview markdown
const Previewer = (props) => {

    const genMarkdownPrev = () => ({ __html: marked(props.markdown) });

    return (
        <div id="previewer_window" className="window">
            <ToolBar title="Preview"/>
            <div id="preview_content" dangerouslySetInnerHTML={genMarkdownPrev()} />
        </div>
    )
};

// Rendered by Editor and Previewer. Displays the title of the window.
const ToolBar = (props) => {

    return (
        <div className="toolbar">{props.title}</div>
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
