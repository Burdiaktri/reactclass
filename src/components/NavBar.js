import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

export const NavBar = () => {
    return (
        <div>
            <Link to="/" className="titulo">El Emporio de Libros</Link>
            <div className="navegador">
            <nav>
                    <Link to="/">Home </Link>
                    <Link to={`/category/librosjuveniles`}>Juveniles </Link>
                    <Link to="/category/librosrecomendados" >Recomendados </Link>
            
                    <CartWidget />
            </nav>
            </div>
            
        </div>
    );
}