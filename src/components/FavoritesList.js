import React from "react";

const FavoritesList = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h2>Your favorites</h2>
      {favorites.map((fav) => (
        <div className="favorites" key={fav.title}>
          <h3>{fav.title}</h3>
          <a href={fav.url} className="read-more">
            Read More
          </a>
          <button
            className="remove-button"
            onClick={() => removeFromFavorites(fav)}
          >
            Remove from favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
