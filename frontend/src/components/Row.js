import React, { Fragment, useState } from 'react';

export default function Row({recipe, index}){
  const [ingredients, setIngredients] = useState(recipe.extendedIngredients)
  return(
    <Fragment>
      <tr>
        <td>{recipe.title}</td>
        <td><img src={recipe.image}/></td>
        <td>{recipe.instructions}</td>
        {ingredients.map(ing => <li>{ing.original}</li>)}
      </tr>
    </Fragment>
  )
}
