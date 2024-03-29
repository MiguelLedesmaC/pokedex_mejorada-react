import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon'

import './Pokedex.css'


const Pokedex = (props)=> {
    const {pokemons, page, setPage, total, loading} = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0)
        setPage(nextPage)
    }
    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1)
        setPage(nextPage)
    }

    return(
        <div>
            <div className='header'>
                <h1>Pokedex</h1>
                <Pagination
                page = {page + 1}
                totalPages = {total}
                onLeftClick = {lastPage}
                onRightClick = {nextPage}
                />
            </div>
            {loading ?(
            <p>Cargando Pokemons.</p>
            ) : (
            <div className='pokedex-grid'>
                {pokemons.map((pokemon)=>{
                    return <Pokemon pokemon = {pokemon} key={pokemon.name} />  
                })}
            </div>
            )}
        </div>
    )
}
export default Pokedex;