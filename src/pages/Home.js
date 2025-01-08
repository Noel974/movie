import React, { useState } from 'react';
import Form from '../components/Form';
import Result from '../components/Resultat';

const Home = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [sortGoodBad, setSortGoodBad] = useState(null);
    return (
        <div className='home-page'>
            <Form setMoviesData={setMoviesData} setSortGoodBad={setSortGoodBad} />
            <Result moviesData={moviesData} sortGoodBad={sortGoodBad} />
        </div>
    );
};

export default Home;