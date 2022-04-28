import React, { Fragment, useState } from 'react';
import foodBackground from './foodbackground.webp'
import Footer from './Footer';

export default function Body(){
  return(
    <Fragment>
      <div style={{backgroundImage: `url(${foodBackground})`,height:'300px', width:'1300px'}}>
        <h1 style={{color:'white', textAlign:'center', paddingTop:'6rem'}}>Search for a Recipe!</h1>
        <div style={{textAlign:'center'}}>
          <input style={{height:'30px', width:'500px', textAlign:'center'}} placeholder='Enter keyword'/>
        </div>
      </div>
      <Footer/>
    </Fragment>
  )
}