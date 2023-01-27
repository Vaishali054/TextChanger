import React,{useState} from 'react'

export default function About(props) {
  
 //const [myStyle, setmyStyle] = useState({
  let myStyle={
  color: props.mode==='light'?'#042743':'white',
  backgroundColor: props.mode==='light'?'white':'#042743',
  border:'1px solid white'
  
  }

  //const [btntext, setBtntext] = useState("Enable Dark mode")
  
 

  // const toggling=()=>{
  //   if(myStyle.color==='white'){
  //     setmyStyle({
  //       color:'black',
  //       backgroundColor:'white'

  //     })
  //     setBtntext("Enable dark mode")
  //   }
  //   else{
  //     setmyStyle({
  //       color:'white',
  //       backgroundColor:'black',
  //       border:'1px solid white'
  //      })
  //      setBtntext("Enable light mode");
  //   }
  // }
  


  return (
    <div className='container my-3'style={{color: props.mode==='light'?'#042743':'white'}} >
        <h1>About Us</h1>
        <div className="accordion accordion-flush"  id="accordionFlushExample">
        <div className="accordion-item" >
        <h2 className="accordion-header" id="flush-headingOne">
        <button  className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyse your text</strong>
          
        </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Free of cost</strong>
        </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div  style={myStyle}className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
        </div>
        <div className="accordion-item" >
        <h2 className="accordion-header" id="flush-headingThree">
        <button className="accordion-button collapsed"  style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Secure</strong>
        </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div  style={myStyle}className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
       </div>
       </div>  
       {/* <div className='container'>
       <button type="button" onClick={toggling} className="btn btn-primary">{btntext}</button>
       </div>  */}
    </div>
  )
}
