import React, { useState, useEffect } from 'react';
import './Pokemon.scss';
import { PokemonCard } from '../PokemonCard/PokemonCard';

export const Pokemon = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

    const fetchData = async () => {
        try {
            setLoading(true);
            const apidata = await fetch(url);
            const apiResponse = await apidata.json();
            setData(apiResponse.pokemon.sort(sortResponseByName));
            setLoading(false);
        }  catch(e) {
            console.log(e);
        }
    }

    const sortResponseByName = (a,b) => {
        var an = a.name.toLowerCase(), bn = b.name.toLowerCase();
        return an.localeCompare(bn);
    }

    useEffect(() => {
        fetchData()
        return () => {
            setData([]);
        }
    }, []);

    if(!data) return;

    return (
        <div className="pokemon__wrapper">
            {!loading ?
                 data && data?.map(item => (
                     <PokemonCard key={item?.id}
                        imageURL = {item?.img}
                        pokemonName = {item?.name}
                        pokemonNumber = {item?.num}
                        pokemonType = {item?.type}
                        pokemonWeight = {item?.weight}
                        pokemonHeight = {item?.height}
                        pokemonWeakness = {item?.weaknesses}
                        pokemonNextEvolution = {item?.next_evolution}
                     />   
               )) : <div className="loader">Loading Data from Server !!!</div>
            }
        </div>
    )
}
