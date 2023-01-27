import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpCLick=()=>{
        console.log("Upper Case was Clicked")
        let newText=text.toUpperCase()
        setText(newText)
        if(text.length<1){
            props.showAlert("No text entered","warning")
        }
        else{
            props.showAlert("Converted to Uppercase.","success")
        }
    }
    
    const handleLowerCLick=()=>{
        console.log("Lower Case was Clicked")
        let newText=text.toLowerCase()
        setText(newText)
        if(text.length<1){
            props.showAlert("No text entered","warning")
        }
        else{
        props.showAlert("Converted to Lowercase.","success")
        }
    }

    const handleOnCHange=(event)=>{
        console.log("On Change")
        setText(event.target.value)
    }

    //Array Destructing syntax
    const[text,setText]=useState('');
    //text="Enter text"    Wrong way to set text
    //setText("Whatever youwa nt to set");    correct way to set text
    return (
        <>
    <div className='container' style={{color: props.mode==='light'?'#042743':'white'}} >
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnCHange} style={{backgroundColor: props.mode==='light'?'white':'#042743',color: props.mode==='light'?'#042743':'white'}} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1 ' onClick={handleUpCLick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleLowerCLick}>Convert to LowerCase</button>
    </div>

    <div className='container my-3' style={{color:props.mode==='light'?'#042743':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,
         {text.length} charaters and {0.008 *text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
        </>
  )
}
