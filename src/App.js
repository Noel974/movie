import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Coup from './pages/Coup';


const App = () => {
    return (
<BrowserRouter>
 <Routes>
     <Route path ="/" element={<Home /> } />
     <Route path ="/coup-de-coeur" element={<Coup /> } />
     <Route path ="*" element={<Home /> } />
 </Routes>
</BrowserRouter>
    );
};

export default App;