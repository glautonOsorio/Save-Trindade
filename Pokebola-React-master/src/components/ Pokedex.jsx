import React, { useState } from 'react';

function Pokedex() {

    const [pokemons, setPokemons] = useState(["Bulbassauro", "Charmander", "Squirtle"])
    let pokemon = ""

    //Salva nome digitado no input
    function salvarPokemon(e) {
        pokemon = (e.target.value)
    }

    //Adicionar pokemon à lista
    function adicionar() {
        if(pokemon){
            setPokemons(pokemons => [...pokemons, pokemon]);
        }else{
            alert("Digite o nome de um pokemon")
        }
        console.log(pokemons)
    }

    return (  
        <div className="pokedex">
            <h4>Coleção de Pokemons</h4>
            <p>Seus pokemons são:</p>

            <ul>
                {pokemons.map(pokemon => <li key={pokemon}> {pokemon} </li>)}
            </ul>
            
            <div className='form-group mb-2'>
                <input placeholder="Digite o nome do Pokemon" type="text" onChange={salvarPokemon}/>
                <button type="submit" className='btn btn-light' onClick={adicionar}>Adicionar</button>
            </div>
        </div>
    );
}

export default Pokedex;