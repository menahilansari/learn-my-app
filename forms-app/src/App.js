import logo from './logo.svg';
import './App.css';
import{Col,Container,Form,Row}from 'react-bootstrap';
import {useState} from 'react';

function App(){
  let[formData,setFormData]=useState(
    {
      uname:'',
      uemail:'',
      uphone:'',
      umessage:'',
      index:''
    }
  )
  let[useData,setUserData]=useState([])



  let getValue=(event)=>{
    let oldData={...formData}
    let inputName=event.target.name;
    let inputValue=event.target.value;
    oldData[inputName]=inputValue;
    setFormData(oldData)

  }
  let handleSubmit=(event)=>{
    let oldUserData={...}
  }
  return(
       <container fluid>
        <container>
          <row>
            <col className='text-center py-5'>
              <h1>Enquiry Now</h1>
            </col>
          </row>
          <row>
            <col lg={5}>
              <form>
                <div className='pb-3'>
                  <label className='form-label'>Name</label>
                  <input type='text' value={formData.uname} name='uname' className='form-control'/>
                </div>
                <div className='pb-3'>
                  <label className='form-label'>Email</label>
                  <input type='email' value={formData.uemail} name='uemail'className='form-control'/>
                </div> 
                <div className='pb-3'>
                  <label className='form-label'>Phone</label>
                  <input type='text' value={formData.uphone} name='uphone'className='form-control'/>
                </div> 
                <div className='pb-3'>
                  <label className='form-label'>Message</label>
                  <input className='form-control' name="id" rows="3"/>
               </div>
               <button className='btn btn-primary'>Save</button>
              </form>
            </col>
            <col lg={7}></col>
          </row>
        </container>
       </container>
       
  );

}