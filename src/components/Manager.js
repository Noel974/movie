export const addToFavourites = (movie) => {
  // Récupérer les films existants dans localStorage
  const movies = window.localStorage.movies
    ? window.localStorage.movies.split(",")
    : [];

  // Ajouter uniquement si le film n'est pas déjà dans la liste
  if (!movies.includes(String(movie.id))) {
    movies.push(String(movie.id));
    window.localStorage.movies = movies.join(","); // Sauvegarder la liste mise à jour
    console.log(`Ajouté : ${movie.title} (ID: ${movie.id})`);
  } else {
    console.log(`Le film ${movie.title} est déjà dans les coups de cœur.`);
  }
};

  
  export const removeFromFavourites = (movieId) => {
    const storedData = JSON.parse(localStorage.getItem("favourites")) || [];
    const updatedData = storedData.filter((fav) => fav.id !== movieId);
    localStorage.setItem("favourites", JSON.stringify(updatedData));
    alert(`Le film a été supprimé de vos coups de cœur !`);
    window.location.reload(); // Recharge pour mettre à jour l'affichage
  };

  export const dateFormatter = (date) => date.split("-").reverse().join("/");
