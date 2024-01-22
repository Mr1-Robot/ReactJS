import { useReducer, useEffect, useCallback, useMemo } from "react";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

type PokemonState = {
  pokemon: Pokemon[];
  search: string;
};

type PokemonAction =
  | {
      type: "SET_POKEMON";
      payload: Pokemon[];
    }
  | {
      type: "SET_SEARCH";
      payload: string;
    };

function reducer(state: PokemonState, action: PokemonAction) {
  switch (action.type) {
    case "SET_POKEMON":
      return { ...state, pokemon: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
  }
}

export function usePokemon(): {
  pokemon: Pokemon[];
  search: string;
  setSearch: (search: string) => void;
} {
  const [{ pokemon, search }, dispatch] = useReducer(reducer, {
    pokemon: [],
    search: "",
  });

  useEffect(() => {
    fetch("/pokemon.json")
      .then((response) => response.json())
      .then((resData) =>
        dispatch({
          type: "SET_POKEMON",
          payload: resData,
        })
      );
  }, []);

  const setSearch = useCallback((search: string) => {
    dispatch({
      type: "SET_SEARCH",
      payload: search,
    });
  }, []);

  const filteredPokemon = useMemo(
    () =>
      pokemon
        .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 20),
    [pokemon, search]
  );

  const sortedPokemon = useMemo(
    () => [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name)),
    [filteredPokemon]
  );

  return { pokemon: sortedPokemon, search, setSearch };
}
