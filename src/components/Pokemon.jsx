import React from "react";
import FavoriteContext from "../contexts/favoritesContext";
import { useContext } from "react";
import './Pokemon.css';

const Pokemon = (props) => {
    const {pokemon} = props;
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const heartNoFavorite = '🤍';
    const heartFavorite = '💜';
    const heart = favoritePokemons.includes(pokemon.name) ? heartFavorite : heartNoFavorite;
    const clickHeart = e =>{
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    };
    return(
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img
                className="pokemon-img" 
                src={pokemon.sprites.front_default}
                alt={pokemon.name} 
                /> 
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <p>#{pokemon.id}</p>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index)=>{
                            return(
                                <div key={index} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            );
                        })}
                    </div>
                    <button onClick={clickHeart}
                    className="pokemon-favorite">{heart}</button>
                </div>
            </div>
        </div>
    );
};
export default Pokemon;