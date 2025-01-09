import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    // Récupérer les IDs des films depuis localStorage
    const moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    // Réinitialiser la liste
    setListData([]);

    // Récupérer les détails des films depuis l'API
    moviesId.forEach((id) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=97ec35ab34ab630731d8cb9b8f3a90b3&language=fr-FR`
        )
        .then((res) => {
          setListData((prevList) => [...prevList, res.data]); // Ajout progressif
        })
        .catch((err) => console.error("Erreur API :", err));
    });
  }, []);

  const handleRemove = (movieId) => {
    // Supprimer le film de la liste affichée
    const updatedMovies = listData.filter((movie) => movie.id !== movieId);
    setListData(updatedMovies);
  
    // Supprimer le film du localStorage
    const moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    const filteredMovies = moviesId.filter((id) => id !== String(movieId)); // Filtrer l'ID supprimé
    window.localStorage.movies = filteredMovies.join(","); // Mettre à jour le localStorage
  
    console.log(`Film ID ${movieId} supprimé du localStorage.`);
  };
  

  return (
    <div className="user-list-page">
      <h2>
        Coup de cœur <span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => (
            <Card
              movie={movie}
              key={movie.id}
              isFavourite={true}
              removeFromFavourites={handleRemove}
            />
          ))
        ) : (
          <h2>Aucun coup de cœur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
