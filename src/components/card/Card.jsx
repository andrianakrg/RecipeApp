import "./Card.css";
import defaultImg from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";

const Card = ({ recipes, isFavouritesPage = false }) => {
  const navigate = useNavigate();
  const { addFavourite, removeFavourite, favourites } = useContext(FavouritesContext);

  const isFavourite = (label) => favourites.some((fav) => fav.label === label);

  return (
    <div className="card">
      {recipes.map(({ recipe }, index) => {
        const { label, image } = recipe;
        const favourite = isFavourite(label);

        return (
          <div className="cardWrapper" key={index}>
            <h1>{label}</h1>
            <img src={image || defaultImg} alt="food" />
            <div className="btnWrapper">
             
              <button onClick={() => navigate("/details", { state: recipe })}>
                More details
              </button>

              {isFavouritesPage ? (
                <button onClick={() => removeFavourite(label)}>
                  Remove from favourites
                </button>
              ) : (
                <button
                  onClick={() =>
                    favourite ? removeFavourite(label) : addFavourite(recipe)
                  }
                >
                  {favourite ? "Remove from favourites" : "Add to favourites"}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
