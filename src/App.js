import React, { useState } from 'react';
import './App.css';

// Rendred by Editor. This displays the text.
// TODO: This will run the markdown interpreter.
const Viewer = (props) => {

    return (
        <>
        <p>{props.text}</p>
        </>
    )
}

// Renderd by App. This component handles text input and stores in state.
// Child component: Viewer which inherits the input text.
const Editor = () => {

    const [inputText, changeInputText] = useState("Hello!");


    const handleChange = (event) => {
        changeInputText(prevText => event.target.value);
        console.log("Text actually changed!")
    }

    return (
        <>
        <textarea
            id="editor"
            value={inputText}
            onChange={handleChange}/>
            <Viewer text={inputText}/>
        </>
    )
}

// 'Top Level' component that renders the Editor component.
const App = () => {

    return (
        <>
        <Editor />
        </>
    )
}

export default App;
