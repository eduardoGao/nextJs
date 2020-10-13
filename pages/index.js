// Componente de React que trabaje como una página

import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Hola Next JS</h1>
        </div>
    );
};

export default Home;
