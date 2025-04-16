import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App(){
  let[status,setStatus]=useState(false);
  return(
    <div className="App">
      <button onClick={()=>setStatus(!status)}>
        {(status)? 'Hide':'Show'}

      </button>
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

