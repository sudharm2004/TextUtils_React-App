import React,{useState} from 'react'

export default function TextForm(props) {

    const style={
        color:props.style.color,
        backgroundColor:props.style.backgroundColor,
        border: props.style.hspCode>127.5? '3px solid black': '3px solid white'
    }

    const handleUpClick=()=>{
        if (text.length===0) {
        props.showAlert('Enter the text first','danger')
        } else {
            setText(text.toUpperCase())
            props.showAlert('Text Converted to Uppercase','success')
        }
    }

    const handleDownClick=()=>{
        if (text.length===0) {
            props.showAlert('Enter the text first','danger')
            } else {
                setText(text.toLowerCase())
                props.showAlert('Text Converted to Lowercase','success')
            }
    }

    const handleClearClick=()=>{
        if (text.length===0) {
            props.showAlert('Enter the text first','danger')
            } else {
                setText("")
                props.showAlert('Text Cleared','success')               
            }
    }

    const handleCopyClick=()=>{
        if (text.length===0) {
            props.showAlert('Enter the text first to copy','danger')
        } else {
                var copyText = document.getElementById("myBox");

                // Select the text field
                copyText.select();
                copyText.setSelectionRange(0, 99999); // For mobile devices
              
                navigator.clipboard.writeText(copyText.value);
                document.getSelection().removeAllRanges();
            }
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const longestWordLength=(array)=>{
        let highestValue=0;
        if (array.length>0) {
            for (const word of array) {
                if(word.length>highestValue){
                    highestValue=word.length;
                }
            }
            return highestValue;
        } else {
            return 0;
        }
        
    }

    const smallestWordLength=(array)=>{
        let smallestValue=array[0].length;
        if (array.length>0) {
            for (const word of array) {
                if(word.length!=0&&word.length<smallestValue){
                    smallestValue=word.length;
                }
            }
            return smallestValue;
        } else {
            return 0;
        }
        
    }

    const [text,setText]=useState('')
    let word_space=0;
    return (
        <>
        <div className="container my-3">

        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={style}></textarea>
                <button className="btn btn-primary my-4" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary my-4 mx-2" onClick={handleDownClick}>Convert to lowercase</button>
                <button className="btn btn-primary my-4 mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary my-4 mx-2" onClick={handleCopyClick}>Copy text</button>

            </div>
        </div>
        <div className="container">
            <h1>Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words,{text.length} characters</p>

            <p>On an Average {0.008*text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} minutes required to read</p>

            <p>{text.split(/\s+/).forEach(Element => {
                word_space+=Element.length;
            })}{word_space} characters without spaces</p>

            <p>
                {Array.from(new Set(text.split(/\s+/))).length} unique words
            </p>

            <p>
                {(text.split(/\s+/)).length-1} Spaces 
            </p>

            <p>
                {(text.split("\n")).length} sentences 
            </p>

            <p>
                {longestWordLength((text.split(/\s+/)))} longest Word Length 
            </p>

            <p>
                {smallestWordLength((text.split(/\s+/)))} shortest Word Length 
            </p>

            <h2>Preview</h2><hr/>
            <p>{text.length>0?text:'Enter something to preview here'}</p>
        </div>
        </>
    )
    
}
