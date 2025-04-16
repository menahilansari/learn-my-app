import logo from './logo.svg';
import './App.css';
import btnmodule from "./Button.module.css"
import Header from './Header';

function App(){
  let[status,setStatus]=useState(false);

  let[pstatus,setpStatus]=useState(false);




  return(
    <div className="App">
      <input type={pstatus ? 'text' :'password'}/>
      <button onClick={()=>setPstatus(!pstatus)}>
        {pstatus ? 'Hide' : 'Show'}
        {(status)? 'Hide':'Show'}
        </button>
        <br/>
        <button className={btnmodule.error}>Error</button>
        <button className={btnmodule.warning}>Demo</button>

      {
      (status)
      ?
     <p className='para'>Welcome to WS</p>
     :
     ''
      }

    </div>
  );
}
export default App;

