import React, { Component } from 'react';
import './index.scss';
import './style.css'
import Compon from './Сomponent';

import Salam from'./Salam';
import './salam.css';

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
    </div>
    <div className='contact4'>
    <a href="" className='c'> Search </a>
    <a href="" className='c'> Cart(2) </a>
    </div>
    </div>
    <div className='header-nav'>
   
      <Compon/>
    </div>
    <div class='main'>
<div class='main1'></div>
<div class='main2'></div>
<div class='main3'></div>
    </div>
    <div class='main-section'>
    <div class='main-section1'><h1>New Arrivals</h1>
    </div>
    </div>
    <div class='main-section2'>
      <h4>Most Trendy 2023 Clother </h4>
    </div>
  
   
    <div class='section'>

      <div class='section1'>
        
        <div class='nav'>
        </div>
        </div>
    </div>

    <section>
      <div class="parent">
        <div class="div1"> <div className='img'><div className='wer'></div> </div>
        </div>
        <div class="div2"><Salam/> </div>
        <div class="div3"><div className='img'><div className='wer'></div> </div>
        </div> 
        <div class="div4"> <Salam/> </div>
        
      </div>
    </section>
 
      <div class='contact2'>
        <h1>Client Testimonials</h1>
    </div>
    <div class='contact3'>
        <h4>What they say   </h4>
    </div>
    </div>
    
    
    
  



)
       
}

  


export default App;
