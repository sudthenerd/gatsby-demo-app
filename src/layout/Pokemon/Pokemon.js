import React from 'react';
import { Link } from 'gatsby';

export default function Pokemon({ pageContext: { pokemon } }) {
    return (
      <div style={{ width: 960, margin: "4rem auto" }}>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.avatar_url} alt={pokemon.name} />
        <h2>Other Details</h2>
        <ul>
            <li>Location: {pokemon.location}</li>
            <li>Type: {pokemon.type}</li>
            <li>Id: {pokemon.id}</li>
        </ul>
        <Link to="/pokemon">Back to all Pokémon</Link>
      </div>
    )
  }