import { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    // Load from localStorage (if any)
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (recipe) => {
    if (!favourites.some((fav) => fav.label === recipe.label)) {
      setFavourites([...favourites, recipe]);
    }
  };

  const removeFavourite = (label) => {
    setFavourites(favourites.filter((fav) => fav.label !== label));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
