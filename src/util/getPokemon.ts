import {PokemonDocument,PokemonQueryVariables,PokemonQuery} from "../generated/graphql"
import { client } from "./pokeApiClient"

export const getPokemon = async(variable:PokemonQueryVariables) => {
  const res = await client.query<PokemonQuery,PokemonQueryVariables>(PokemonDocument,variable).toPromise()
  return res
}