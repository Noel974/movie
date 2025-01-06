import React from "react";
import Card from "./Card";

const Result = ({ moviesData, sortGoodBad }) => {
  return (
    <div className="result">
      {moviesData.length > 0 ? (
        moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
            return 0;
          })
          .map((movie) => <Card key={movie.id} movie={movie} />)
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
};

export default Result;
