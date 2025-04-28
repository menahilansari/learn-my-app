import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App(){
  let [city,setCity]=useState('')
  let [wDetails,setWdetails]=useState()
  let getData =(event)=>{
  .then((res)=>res.json())
  .then((finalBox)=>{
    console.log(finalRes)
    setWdetails(finalRes)
  })

  event.preventDefault()
  setCity('')

  }
  return(
    <div className='w-[100%] h-[100vh]bg-[#4aacb1]'>
      <div className='max-w[1320px] mx-auto'>
        <h1 className='text-[40px]font-bold py-[50px] text-white'>simple weather App</h1>
        <form onSubmit={getData}>
          <input type='text' value={city}onChange={(e)=>setCity(e.target.value)} className='w-[300px] h-[40px]'/>
          </form>

          <div className='w-[400px]mx-auto bg-white shadow-lg mt-[400px] p-[25px]'>
            {
              wDetails|==undefined
              ?
            <>
            <h3 className='font-bold text-[30px]'>jaipur<span className='bg-[yellow]'>IN</span></h3>
            <h2 className='font-bold text-[40px]'>9.62oc</h2>
            <p>fog</p>
              </>
              :
              "No Data"
            }

          </div>


      </div>

    </div>
  );
}
export default App;