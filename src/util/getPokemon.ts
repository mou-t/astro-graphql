import {PokemonDocument,PokemonQueryVariables} from "../generated/graphql"
import { client } from "./pokeApiClient"

export const getPokemon = async(variable:PokemonQueryVariables) => {
  const res = await client.query<unknown,PokemonQueryVariables>(PokemonDocument,variable).toPromise()
  return res
}