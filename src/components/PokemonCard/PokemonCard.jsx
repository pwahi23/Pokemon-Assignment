import React from 'react';
import './PokemonCard.scss';

export const PokemonCard = (props) => {
    return (
        <div className="pokemon__wrapper--card" key={props?.id}>
            <div className="pokemon-image">
                <img src={props?.imageURL} alt="Sample"/>
            </div>
            <div className="pokemon-content">
                <div className="title">{props?.pokemonName}</div>
                <p><strong>Number:</strong>{props?.pokemonNumber}</p>
                <p><strong>Type:</strong>{props?.pokemonType?.join(', ')}</p>
                <p><strong>Weight:</strong>{props?.pokemonWeight}</p>
                <p><strong>Height:</strong>{props?.pokemonHeight}</p>
                <p className="weakness"><strong>Weaknesses: </strong>{props?.pokemonWeakness?.join(', ')}</p>
                {props?.pokemonNextEvolution && 
                    <div className="next-evolution">
                        <strong>Next Evolution: </strong>
                        <ul>
                            {props?.pokemonNextEvolution && props?.pokemonNextEvolution.map(item => (
                                <li key={item.num}>
                                    {item.num}, {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </div>  
    )
}
