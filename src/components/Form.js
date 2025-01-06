import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = ({ setMoviesData, setSortGoodBad }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [search, setSearch] = useState("");
  const [includeAdult, setIncludeAdult] = useState(false);

  // Récupérer les genres au chargement du composant
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=97ec35ab34ab630731d8cb9b8f3a90b3&language=fr-FR"
        );
        setGenres(res.data.genres);
      } catch (err) {
        console.error("Erreur lors de la récupération des genres :", err);
      }
    };

    fetchGenres();
  }, []);

  // Récupérer les films selon les critères
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = "";

        // Si une recherche est spécifiée, utilisez l'API de recherche
        if (search) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=97ec35ab34ab630731d8cb9b8f3a90b3&language=fr-FR&include_adult=${includeAdult}&query=${search}`;
        } else {
          // Sinon, utilisez l'API de découverte par genre
          url = `https://api.themoviedb.org/3/discover/movie?api_key=97ec35ab34ab630731d8cb9b8f3a90b3&language=fr-FR&include_adult=${includeAdult}&with_genres=${selectedGenre}`;
        }

        const res = await axios.get(url);
        setMoviesData(res.data.results || []);
      } catch (err) {
        console.error("Erreur lors de la récupération des films :", err);
      }
    };

    fetchMovies();
  }, [search, includeAdult, selectedGenre, setMoviesData]);

  return (
    <div className="form-component">
    <div className="form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const inputValue = e.target.searchInput.value.trim();
          if (inputValue) {
            setSearch(inputValue);
          }
        }}
      >
        {/* Champ de recherche */}
        <input
          type="text"
          name="searchInput"
          placeholder="Entrez le titre d'un film"
          id="search-input"
        />
        <input type="submit" value="Rechercher" />

        {/* Checkbox pour inclure les films adultes */}
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={includeAdult}
              onChange={(e) => setIncludeAdult(e.target.checked)}
            />
            Inclure les films interdits aux -18 ans
          </label>
        </div>

        {/* Sélecteur de genre */}
        <div className="genre-select-container">
          <label htmlFor="genre-select">Choisir un genre :</label>
          <select
            id="genre-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Tous les genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* Boutons de tri */}
      <div className="btn-sort-container">
        <button
          className="btn-sort"
          onClick={() => setSortGoodBad("goodToBad")}
        >
          Top<span>➜</span>
        </button>
        <button
          className="btn-sort"
          onClick={() => setSortGoodBad("badToGood")}
        >
          Flop<span>➜</span>
        </button>
      </div>
    </div>
    </div>

  );
};

export default Form;
