import "./Home.css";
import {useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import background from "../../assets/background.jpg";


const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [recipes, setRecipes] = useState(null);

  const mealTypes = ["Breakfast","Lunch","Dinner","Snack","Teatime"];

  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY ;
  const USER_ID = process.env.REACT_APP_USER_ID;
  


  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}${selectedMeal ? `&mealType=${selectedMeal}` : ''}`;
  const getData = async () => {
    
    try {
      const {data} = await axios.get(url, {
        headers: {
          'Edamam-Account-User': USER_ID
        }
    });
      //console.log(data);  
      setRecipes(data.hits);  
    } 
    catch (error) { 
      console.log("API Error:", error.response?.data || error.message); 
      console.log("Status:", error.response?.status);
    }
  }
 
  return (
    <div>
      <Header query={query} setQuery={setQuery} selectedMeal={selectedMeal} setSelectedMeal={setSelectedMeal}  mealTypes={mealTypes} getData={getData}/>
     
      {recipes?.length === 0 && <h1>Sorry, no recipes found.</h1>}
      {
        recipes?.length > 0 && <Card recipes={recipes}/>
      }
      
    </div>);
};

export default Home;