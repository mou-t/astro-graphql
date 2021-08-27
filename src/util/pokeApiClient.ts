import { createClient} from '@urql/core';

export const client = createClient({
  url:"https://graphql-pokeapi.vercel.app/api/graphql"
})