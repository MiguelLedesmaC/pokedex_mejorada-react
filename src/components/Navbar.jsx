import React from 'react';
import FavoriteContext from '../contexts/favoritesContext';
import './Navbar.css';
const { useContext } = React;




const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext)
    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
    return(
        <nav className='nav'>           
           <div>
            <img src={imgUrl}
                alt='copy-logo'
                className='navbar-image' />
            </div>
            <div>💜 {favoritePokemons.length}</div>
        </nav>
    )
}

export default Navbar