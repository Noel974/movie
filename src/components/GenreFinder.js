import React from "react";

const GenreFinder = ({ genreIds, isAdult }) => {
  const genreMapping = {
    28: "Action",
    12: "Aventure",
    16: "Animation",
    35: "Comédie",
    80: "Policier",
    99: "Documentaire",
    18: "Drame",
    10751: "Famille",
    14: "Fantasy",
    36: "Histoire",
    27: "Horreur",
    10402: "Musique",
    9648: "Mystère",
    10749: "Romance",
    878: "Science-fiction",
    10770: "Téléfilm",
    53: "Thriller",
    10752: "Guerre",
    37: "Western",
  };

  return (
    <ul className="genres">
      {genreIds?.map((id, index) => (
        <li key={index} className="genre-item">
          {genreMapping[id] || "Genre inconnu"}
        </li>
      ))}
      {isAdult && (
        <li className="genre-item genre-adult">
          Interdit aux moins de 18 ans
        </li>
      )}
    </ul>
  );
};

export default GenreFinder;
