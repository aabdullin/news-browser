import React from "react";

const ArticleCard = ({
  article,
  clickedArticles,
  isFavorite,
  isRead,
  addToFavorites,
  removeFromFavorites,
  markAsRead,
  formatTimeDifference,
}) => {
  return (
    <div className="article-card">
      <h3
        className={`article-title ${
          clickedArticles.includes(article) ? "clicked-title" : ""
        }`}
      >
        {article.title}
      </h3>
      <p className="source">{article.source.name}</p>
      <p className="time">{formatTimeDifference(article.publishedAt)}</p>
      <p>{article.description}</p>
      {article.urlToImage && (
        <img className="article-image" src={article.urlToImage} alt="" />
      )}
      <a href={article.url} className="href-read">
        Read More
      </a>
      {isFavorite ? (
        <button
          className="remove-button"
          onClick={() => removeFromFavorites(article)}
        >
          Remove from favorites
        </button>
      ) : (
        <button
          className="favorite-button"
          onClick={() => addToFavorites(article)}
        >
          Add to favorites
        </button>
      )}
      {isRead ? (
        <span>Read</span>
      ) : (
        <button className="mark-button" onClick={() => markAsRead(article)}>
          Mark as read
        </button>
      )}
    </div>
  );
};

export default ArticleCard;
