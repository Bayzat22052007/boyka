import React, { Component } from 'react';
import './index.scss';
import './style.css'

import Compon from './Сomponent';

function App() {
return (
 
  
  <div className='header-menu'>

    
   <div className='header-menu1'>
    <div className='contact'>
    <a href="">(08)123 456 7890</a>
    <a href="">yourmail@domain.com</a>
    </div>
   
   <div className='contact1'>
    <h1 className='boyka'>Boyka</h1>
    </div>
<div className='logo1'>
    <a href="">USD$</a>
    <a href=""> English</a>
    <a href=""> Setting </a>
    </div>
 </div>
  
   
    


    <div className='block2'>
      <div className='contact3'>
    <a href="" className='b'>Home</a>
    <a href="" className='b'> Shop </a>
    <a href="" className='b'>  Page  </a>
    <a href="" className='b'> Blog </a>
    <a href="" className='b'> About </a>
    <a href="" className='b'> Contact us </a>
    <div className='contact4'>
    <a href="" className='c'> Search </a>
    <a href="" className='c'> Cart(2) </a>
    </div>
    </div>
    </div>
    <div className='header-nav'>
   
      <Compon/>
    </div>
    </div>
    
    
    
  



)
       
}

  


export default App;
