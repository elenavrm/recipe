import './App.css';
import video from './food.mp4';
import React, { useEffect, useState } from 'react';
import MyFoodSearch from './MyFoodSearch';


function  App() {

  const MY_ID = 'bad01606';
  const MY_KEY = 'a39d4edb993f51eacd900ee11127ea2f';

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("swordfish");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json()
      setMyRecipes(data.hits);
      console.log(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e)=>{
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className='App'>
    <div className='container'>
    <video autoPlay muted loop>
      <source src={video} type='video/mp4'/>
    </video>
    <h1> FIND A RECIPE </h1>
    </div>

    <div className='container'>
    <form onSubmit={finalSearch}>
    <input className='search' onChange={myRecipeSearch} value={mySearch}></input>
  </form>
</div>

<div className='container'>
     <button onClick={finalSearch}> LET'S FIND </button>
</div>

    {myRecipes.map((element, index) => (
    <MyFoodSearch key={index}
    label={element.recipe.label} 
    image={element.recipe.image}
    calories={element.recipe.calories}
    ingredients={element.recipe.ingredientLines}
    cuisine={element.recipe.cuisineType}
    meal={element.recipe.mealType}
    />
    ))}

    </div>
  )
}
export default App;