import React from 'react';
import CartWidget from './CartWidget';

export const NavBar = () => {
    return (
        <div>
            <h1 className="titulo">Bali Planty Life</h1>
            <div className="navegador">
            <nav>
                    <a href="index.html" >Home </a>
                    <a href="shop.html" >Shop </a>
                    <a href="contact.html" >Contact </a>
            
                    <CartWidget />
            </nav>
            </div>
            
        </div>
    );
}