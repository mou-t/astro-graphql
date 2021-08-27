import {PokemonsDocument,PokemonsQueryVariables,PokemonsQuery} from "../generated/graphql"
import { client } from "./pokeApiClient"

export const getPokemons = async(variable:PokemonsQueryVariables) => {
  const res = await client.query<PokemonsQuery,PokemonsQueryVariables>(PokemonsDocument,variable).toPromise()
  return res
}
