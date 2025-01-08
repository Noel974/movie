export const addToFavourites = (movie) => {
    const storedData = JSON.parse(localStorage.getItem("favourites")) || [];
    if (!storedData.some((fav) => fav.id === movie.id)) {
      storedData.push(movie);
      localStorage.setItem("favourites", JSON.stringify(storedData));
      alert(`${movie.title} a été ajouté à vos coups de cœur !`);
    } else {
      alert(`${movie.title} est déjà dans vos coups de cœur !`);
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
