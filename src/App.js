import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouteIndex from './Routes/RouteIndex';
import Footer from './components/Footer';
import Header from './components/Header';


const App = () => {
    return (
<BrowserRouter>
        <Header/>
    <RouteIndex />
    <Footer/>
</BrowserRouter>
    );
};

export default App;