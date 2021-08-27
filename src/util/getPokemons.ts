import {PokemonsDocument,PokemonsQueryVariables} from "../generated/graphql"
import { client } from "./pokeApiClient"

export const getPokemons = async(variable:PokemonsQueryVariables) => {
  const res = await client.query<unknown,PokemonsQueryVariables>(PokemonsDocument,variable).toPromise()
  return res
}