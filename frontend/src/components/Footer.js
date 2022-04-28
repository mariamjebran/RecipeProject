import React, { Fragment, useState } from 'react';
import { recipes } from '../recipes';

export default function Footer(){
  const [randomRecipes, setRandomRecipes] = useState([recipes[0],recipes[4]])
  console.log(randomRecipes[0])
  return(
    <Fragment>
      <div>
        <h2 style={{textAlign:'center', color: 'green'}}>Recipes of the Day</h2>
        <div>
          <img style={{paddingLeft:'4rem', height:'400px', width:'500px'}} src={randomRecipes[0].image} />
          <img style={{paddingLeft:'3rem', height:'400px', width:'500px'}} src={randomRecipes[1].image} />
        </div>
      </div>
    </Fragment>
  )
}