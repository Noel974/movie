import React from "react";

const Card = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        case 18: // Films interdits aux moins de 18 ans
          genreArray.push(`Interdit aux moins de 18 ans`);
          break;
        default:
          genreArray.push(`Genre inconnu`);
          break;
      }
    }
    return genreArray.map((genre, index) => <li key={index}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");

    let newData = storedData.filter((id) => id != movie.id);

    window.localStorage.movies = newData;
  };

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`Affiche du film ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>
        {movie.vote_average}/10 <span aria-label="étoile">⭐</span>
      </h4>
       <ul aria-label="Genres">{genreFinder()}</ul>
    {/* Afficher si le film est interdit aux moins de 18 ans */}
    {movie.adult && (
      <p style={{ color: "red", fontWeight: "bold" }}>
        Interdit aux moins de 18 ans
      </p>
    )}
      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>
      {movie.genre_ids ? (
        <button
          className="btn"
          onClick={() => addStorage()}
          aria-label={`Ajouter ${movie.title} aux coups de cœur`}
        >
          Ajouter aux coups de coeur
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
          aria-label={`Supprimer ${movie.title} de la liste`}
        >
          Supprimer de la liste
        </button>
      )}
    </div>
  );
};

export default Card;
