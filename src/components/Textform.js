import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("upper")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("change")
        setText(event.target.value)
    }
    const handelCopy = () =>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    
    const [text, setText] = useState("");

    return (
        <>
            <div className='container'>
                <h4>{props.heading}</h4>
                <div className="input-group">

                    <textarea className="form-control" aria-label="With textarea"id="mybox" rows='8' value={text} onChange={handleOnChange}></textarea>

                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy</button>
                

            </div>
            <div className="container">
                <h2>Your Text Summery</h2>
                <p>{text.split(" ").length} Words, {text.length} Charactor</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>

        </>
    )
}
