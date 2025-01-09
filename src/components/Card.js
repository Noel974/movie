import React from "react";
import GenreFinder from "./GenreFinder";
import { addToFavourites, dateFormatter } from "./Manager";

const Card = ({ movie, isFavourite, removeFromFavourites  }) => {
  const isAdult = movie.adult; // Vérifie si le film est pour adultes

  return (
    <div className="card" aria-label={`Carte du film ${movie.title}`}>
      <div className="card-header">
        <h2 className="card-title" aria-label="Titre">
          {movie.title}
        </h2>
      </div>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "./img/poster.jpg"
        }
        alt={`Affiche du film ${movie.title}`}
        className="card-img-top"
      />
      <div className="card-body">
        {movie.release_date && (
          <h5 className="card-subtitle mb-2 text-muted">
            Sorti le : {dateFormatter(movie.release_date)}
          </h5>
        )}
        <h4 className="card-text">
          {movie.vote_average}/10 <span aria-label="étoile">⭐</span>
        </h4>
        {movie.overview && (
          <>
            <h3 className="card-overview-title">Synopsis</h3>
            <p className="card-overview-text">{movie.overview}</p>
          </>
        )}
        <ul className="genres" aria-label="Genres">
          <GenreFinder genreIds={movie.genre_ids} isAdult={isAdult} />
        </ul>
      </div>
      <div className="card-footer text-muted">
        <button
          className="btn btn-primary mt-3"
          onClick={() => addToFavourites(movie)}
          aria-label={`Ajouter ${movie.title} aux coups de cœur`}
        >
          coups de cœur
        </button>
        {isFavourite && (
          <button
            className="btn btn-danger mt-3"
            onClick={() => removeFromFavourites(movie.id)}
            aria-label={`Supprimer ${movie.title} des coups de cœur`}
          >
            Supprimer
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
