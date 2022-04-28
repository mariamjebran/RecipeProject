import React, { useState } from 'react';
import { recipes } from '../recipes';
import Row from './Row'

export default function Table() {

  const [randomRecipes, setRandomRecipes] = useState(recipes)
  const [ingredients, setIngredients] = useState(recipes[0].extendedIngredients)
  console.log(ingredients)

  return(
    <div>
      {/* <button onClick={recipes}>Click Me!</button> */}
      <table>
        <tr>
          <th>Title</th>
          <th>Picture</th>
          <th>Instructions</th>
        </tr>
        {randomRecipes.map((r, index) => <Row recipe={r} key={index}/>)}
      </table>
    </div>
  )
}



// const recipes = async () => {
//   const configs = { 
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };
//   console.log(configs);
//   // const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=989e01b464df4538966c7db2ce74205d", configs);
//   const response = await fetch("https://api.spoonacular.com/recipes/random?apiKey=989e01b464df4538966c7db2ce74205d", configs)
//   const oneRecipe = await response.json();
//   console.log(oneRecipe)
//   setRandomRecipe(oneRecipe.recipes[0])
// }

{/* {weekRecipes.map((r, index) => <Row recipe={r} key={index}/>)} */}