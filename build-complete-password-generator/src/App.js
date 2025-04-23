import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
import {LC,UC,NC,SC} from './passChar.jsx'

function App(){
let p="Wscubetech";
let n= p.charAt(Math.floor(Math.random()*p.length) )
console.log(n) //4.1  =4 //4.9 //4 //5.3 //5


  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbols,setSetsymbols]=useState(false)
  let [passwordlen,setPasswordLen]=useState(10)

  let createPassword=()=>{
    let finalPass=''
    let charSet=''
    if(uppercase || lowercase || number || symbols){
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbols) charSet+=SC
      for(let i=0;i<passwordlen;i++){
      finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      console.log(finalPass)


    }
  
else{
  alert("Please one CheckBox!.....")
}
  }
  return(
    <>
    <div className='passwordBox'>
      <h2>password Generator</h2>

      <div className='passwordBoxin'>
        <input type='text' readyOnly /><button>Copy</button>
      </div>
      <div className='passlengh'>
        <lable>password lenght</lable>
        <input type='number' max={20} min={10} value={passwordlen} 
        onChange={(event)=>setPasswordLen(event.target.value)}
        />

      </div>
      <div className='passlengh'>
        <lable>Include uppercase letters</lable>
        <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
      </div>

      <div className='passlengh'>
        <lable>Include lowercase letter</lable>
        <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
      </div> 

        <div className='passlengh'>
        <lable>Include include numbers</lable>
        <input type='checkbox'  checked={number} onChange={()=>setNumber(!number)}/>
      </div>

        <div className='passlengh'>
        <lable>Include symbols</lable>
        <input type='checkbox' checked={symbols} onChange={()=>setSetsymbols(!symbols)} />
      </div>
      <button className='btn' onClick={createPassword}>
        Generate password
      </button>

    </div>

    </>
  );
}
export default App;