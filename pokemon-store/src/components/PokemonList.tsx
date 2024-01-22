import React from "react";

import { usePoke } from "../../context/pokemonStore";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

interface PokeItem {
  id: number;
  name: string;
}

export default function PokemonList() {
  const { pokemon } = usePoke();

  return (
    <>
      <SearchBar />
      <ul>
        {pokemon.map((item: PokeItem) => (
          <PokemonCard key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
