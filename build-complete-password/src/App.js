import logo from './logo.svg';
import './App.css';

function App(){
  return(
    <>
    <div className='passwordBox'>
      <h2>password Generator</h2>
      <div className='passwordboxin'>
        <input type='text' readyOnly/><button>Copy</button>
      </div>
      <div className='passLenght'>
        <lable>password lenght</lable>
        <input type='number' />

      </div>
      <div className='passLenght'>
        <lable>Include uppercase letters</lable>
        <input type='checkbox' />
      </div>

      <div className='passLenght'>
        <lable>Include lowercase letter</lable>
        <input type='checkbox' />
      </div> 

        <div className='passLenght'>
        <lable>Include include numbers</lable>
        <input type='checkbox' />
      </div>

        <div className='passLenght'>
        <lable>Include symbols</lable>
        <input type='checkbox' />
      </div>


    </div>

    </>
  );
}
export default App;