import React, { useState } from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Result from '../components/Resultat';

const Home = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [sortGoodBad, setSortGoodBad] = useState(null);
    return (
        <div className='home-page'>
            <Header />
            <Form setMoviesData={setMoviesData} setSortGoodBad={setSortGoodBad} />
            <Result moviesData={moviesData} sortGoodBad={sortGoodBad} />
            <Footer/>
        </div>
    );
};

export default Home;