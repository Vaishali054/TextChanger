
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
// import{
//         BrowserRouter as Router,
//         Route,
//         Routes,
        
// } from "react-router-dom";

function App(){
        const [Mode,setMode] = useState('light')
        const [alert,setalert] = useState(null)
        const showAlert=(message,type)=>{
                setalert({
                        msg:message,
                        type:type
                })
                setTimeout(()=>{
                        setalert(null);
                },3000);
         }

        const toggleMode=()=>{
                  if(Mode==='light'){
                          setMode('dark');
                          document.body.style.backgroundColor='#042743';
                          showAlert("Dark mode has been enabled","success");
                          //document.title='Textutils-Dark Mode';
                        //   setInterval(()=>{
                        //         document.title="TextUtils is Amazing"
                        //   },2000);
                        //   setInterval(()=>{
                        //         document.title="Install TextUtils Now!"
                        //   },1500);
                        }
                  else{
                         setMode('light')
                         document.body.style.backgroundColor='white';
                         showAlert("Light mode has been enabled","success");
                         //document.title='Textutils-Light Mode';
                        }
                }
                
          return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils2" mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert} /> 
        
    <div className='container my-3'>
    {/* <Routes>
        <Route exact path="/about"  element ={<About mode={Mode}/>}></Route>
        <Route  exact path='/'element={<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={Mode}/> }></Route>
    </Routes> */}
    <About mode={Mode}/>
    <TextForm showAlert={showAlert} heading="Word Counter |Text Converter"  mode={Mode}/> 
    </div>
    {/* </Router> */}
    
     </>
      
   );
}

export default App;


            
    

    
    