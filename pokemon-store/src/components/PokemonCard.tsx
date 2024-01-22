import React from "react";

interface PokeItem {
  id: number;
  name: string;
}

export default function PokemonCard({ item }: { item: PokeItem }) {
  return (
    <li>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
          width="100%"
          height="100%"
        />
      </div>
      <h3>{item.name}</h3>
    </li>
  );
}
