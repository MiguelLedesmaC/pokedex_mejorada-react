import React from "react";
import './Pokemon.css';

const Pokemon = (props)=> {
    const {pokemon} = props;
    return(
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img
                className="pokemon-img" 
                src={pokemon.sprites.front_default}
                alt={pokemon.name} />
                
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <p>#{pokemon.id}</p>
                </div>
                <div>
                    <div>
                        {pokemon.types.map((type, index)=>{
                            return(
                                <div key={index}>{type.type.name}</div>
                            )
                        })}
                    </div>
                    <div>🖤</div>
                </div>
            </div>
        </div>
    )
}
export default Pokemon;