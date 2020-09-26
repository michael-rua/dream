import React, { useState, useEffect } from "react"

import firebase from 'firebase/app'

function ExpandedRecipeCard (props) {
  const [recipe, setRecipe] = useState('')
  const recipeId = props.match.params.id

  useEffect(() => {
    firebase
      .firestore()
      .collection('recipes')
      .doc(recipeId)
      .get()
      .then(doc => {
        setRecipe(doc.data())
      })
      .catch(error => {
        console.error("Error getting recipe: ", error)
      })
  },[])

  // console.log(props.location.recipe)
  console.log(recipe.method)

  return (
    <>
      <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <img src={recipe.imagePath} alt={recipe.name}/>
              </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-5">{recipe.name}</p> {/* --- NAME OF RECIPE --- */}
              </div>
          </div>
              <div className="content">
                Serves: {recipe.serves} <br/> {/* --- SERVES --- */}
                Prep time: {recipe.prepTime} {/* --- PREP TIME --- */}
              </div>
              <div className="ingredients">
                Ingredients needed:<br/><br/>
                {recipe.ingredients && recipe.ingredients.map(ingredient => (
                  <p>{ingredient}</p>
                ))}
              </div>
              <div className="Method">
              <br/>Method:<br/><br/>
                {recipe.method && recipe.method.map(step => (
                  <p>{step}</p>
                ))}
              </div>
          </div>
          
      </div>
    </>
  )
}

export default ExpandedRecipeCard