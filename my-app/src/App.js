import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App(){
  let template='';
  let{count,setCount}=useState(1)
  let{pshow,setpshow}=useState(false)

  if(pshow){
    template=<>
    <button>Hide</button>
    <p>Welcome to WS</p>
    </>
  }
  else{
    template=<button className='bg-{red} p-4'>Show</button>
  }

  let displayData=()=>{
    setCount(count+1)
    
  }
  let addData=(a,b)=>{
    console.log(a,b)
  }
  return(
    <div className="App">
      {template}
      <div>
        {count}
      </div>
      <button className='bg-[red] p-[10px] mr-4' onClick={()=>addData(20,25)}>Add data</button>
      <button className='bg-[red] p-[10px]' onclick={displayData}>Save</button>
      <Header/>
      <h1 className='text-{40px} text-red-900 font-bold'>Welcome to WS</h1>
    </div>
  )
}