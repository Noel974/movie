import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouteIndex from './Routes/RouteIndex';
import Footer from './components/Footer';
import Header from './components/Header';


const App = () => {
    return (
<BrowserRouter>
        <Header/>
        <main className='main'>
        <RouteIndex />
        </main>
    <Footer/>
</BrowserRouter>
    );
};

export default App;