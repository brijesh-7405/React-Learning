import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleonUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleonClrClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text is Clear","success");

    }

    const handleonLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

const[text,setText] = useState('');
// text = "hello" //Wrong way to change the State
//setText("Enter your text");  //Correct way to change the State
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows="8"  style={{color: props.mode==='dark'?'white':'black',backgroundColor:props.mode==='light'?'white':'#3c3c3c'}}></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleonUpClick} disabled={text.length===0}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleonLoClick} disabled={text.length===0}>Convert To Lowercase</button>
        <button className="btn btn-primary" onClick={handleonClrClick} disabled={text.length===0}>Clear Text</button>


     </div>
     <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.length>0?text.split(/\s+/).filter((element)=>{return element.length!==0}).length:0} words and {text.length} characters.</p>
        <p>{ text.length>0?0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length:0} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Please enter in textbox for preview'}</p>
     </div>
    </>
  )
}
