import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FilterInput from "./components/FilterInput";
import ArticleCard from "./components/ArticleCard";
import FavoritesList from "./components/FavoritesList";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [readArticles] = useState([]);
  const [clickedArticles, setClickedArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c330d5a23e24e5ba6451f14ba3a8caf"
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleSearch = () => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setArticles(filteredArticles);
  };

  const addToFavorites = (article) => {
    setFavorites((prevFavorites) => [...prevFavorites, article]);
  };

  const removeFromFavorites = (article) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.title !== article.title)
    );
  };

  const markAsRead = (article) => {
    setClickedArticles((prevClickedArticles) => [
      ...prevClickedArticles,
      article,
    ]);
  };

  const isFavorite = (article) => {
    return favorites.some((fav) => fav.title === article.title);
  };

  const isRead = (article) => {
    return readArticles.some((read) => read.title === article.title);
  };

  const formatTimeDifference = (dateString) => {
    const currentDate = new Date();
    const articleDate = new Date(dateString);
    const timeDifference = Math.abs(currentDate - articleDate);
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

    return `${hoursDifference} hours ago`;
  };

  return (
    <div className="container">
      <h1>Breaking News</h1>
      <FilterInput
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onSearch={handleSearch}
      />
      <div>
        <h2>Top Stories</h2>
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            article={article}
            clickedArticles={clickedArticles}
            isFavorite={isFavorite(article)}
            isRead={isRead(article)}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            markAsRead={markAsRead}
            formatTimeDifference={formatTimeDifference}
          />
        ))}
      </div>
      <FavoritesList
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
};

export default App;
