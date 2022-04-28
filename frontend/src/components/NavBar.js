import React from 'react';
import { Link } from "react-router-dom";
import backgroundImage from './backgroundImage.png'

export default function NavBar() {
  let links = (         
    <React.Fragment>
      <Link style={{color: "black"}} to="/home">Home </Link>
      <Link style={{color: "black"}} to="/recipes">Recipes </Link>
      <Link style={{color: "black"}} to="/desserts">Desserts </Link>
      <Link style={{color: "black"}} to="/popular">Popular </Link>
    </React.Fragment>  
  )
  return(
    <div style={{display:'flex', height:'40%', width:'100%'}}>
      <div style={{height:'100%', width:'30%', paddingLeft:'3rem'}}>
          <img src= {backgroundImage} style={{height:'50px', width:'50px'}}></img>
      </div>
      <div style={{height:'100%', width:'70%', textAlign:'right',color:'black', paddingRight:'3rem'}}>
        <nav>
          {links}
        </nav> 
      </div>
    </div>
  )
}
