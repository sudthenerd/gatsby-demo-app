import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { allPokemon } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Choose a Pokémon!</h1>
    <ul className="d-flex align-items-center list-style-none">
      {allPokemon.map(pokemon => (
        <li
          key={pokemon.id}
          className="p-4 m-4"
        >
          <Link to={`/pokemon/${pokemon.id}`}>
            <img src={pokemon.avatar_url} alt={pokemon.name} width="100" height="100" />
            <p>{pokemon.name} {pokemon.id}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);