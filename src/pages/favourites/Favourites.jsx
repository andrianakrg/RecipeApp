import { useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";

import "./Favourites.css";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";

const Favourites = () => {
  const { favourites} = useContext(FavouritesContext);
   const formatted = favourites.map((recipe) => ({ recipe }));
  const navigate = useNavigate();
  return (
    <div className="favourites">
      <h2>Your Favourites ❤️</h2>
      <div className="card">
        {favourites.length === 0 ? (
        <p>No favourites yet!</p>
        ) : (
          <Card recipes={formatted} isFavouritesPage={true} />
        )}
      </div>
       
      <button className="backBtn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default Favourites;
