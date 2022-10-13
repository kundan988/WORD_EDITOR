import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked"+ text );
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "sucess");
    }
    const handleClearClick = ()=>{
      // console.log("Uppercase was clicked"+ text );
       let newText='';
       setText(newText)
       props.showAlert("Cleared text","Sucess");
   }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked"+ text );
       let newText=text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to lowercase","Sucess");
   }
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value)
    }
    const handleCopy = ()=> {
      // console.log("Uppercase was clicked"+ text );
      console.log("I am a copy");
      var text=document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);    
   }
   const handleExtraSpaces = () =>{
    //console.log("On change");
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","Sucess");
}
    const[text, setText]=useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' :'#042743'}}>
      
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white'}} 
  id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary " onClick={handleUpClick}> Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowerercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Space</button>


  

    </div>
    <div className="container my=20" style={{color: props.mode==='dark' ? 'white' :'grey'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview text</h2>
      <p>{text.length>0?text:"Enter your text above to preview it here"}</p>
    </div>
    </>
  )
}

