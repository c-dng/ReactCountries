import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br />
            <li>Projet réalisé en React. </li>          
            <li>En utilisant les boutons radios on peut filtrer les pays selon le continent auquel il appartient. On peut aussi annuler le filtre. </li>
            <li>En utilisant le filtre graduel, on peut afficher un plus grand nombre ou à l'inverse, un plus petit nombre de pays </li>
            <br />
            </div>
    );
};

export default About;