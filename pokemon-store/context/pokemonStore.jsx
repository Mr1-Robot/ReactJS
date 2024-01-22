import { createContext, useContext } from "react";

import { usePokemon } from "../utils/customeHooks";

export const PokemonContext = createContext([]);

export function usePoke() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  return (
    <PokemonContext.Provider value={usePokemon()}>
      {children}
    </PokemonContext.Provider>
  );
}
