import React from 'react';
import Pokemon from './Pokemon'
import './Pokedex.css'


const Pokedex = (props)=> {
    const {pokemons} = props;
    return(
        <div>

            <div className='header'>
                <h1>Pokedex</h1>
                <p>Pagination</p>
            </div>
            <div className='pokedex-grid'>
                {pokemons.map((pokemon, index)=>{
                    return(
                      <Pokemon pokemon = {pokemon} key={pokemon.name} />
                    )
                })}
            </div>
       
        </div>
    )
}
export {Pokedex}