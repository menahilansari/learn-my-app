import logo from './logo.svg';
import './App.css';
import btnmodule from "./Button.module.css"
import Header from './Header';

function App(){
  let[status,setStatus]=useState(false);

  let[pstatus,setpStatus]=useState(false);

  let[modalstatus,setmodalStatus]=useState(false);


  let[menustatus,setmenuStatus]=useState(false);
  return(
    <div className="App">
    <button className='micon'>&#9776;</button>
    <div className={'menu ${menuStatus}'}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Gallery</li>
        <li>Contant</li>

      </ul>

    </div>

 
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

