<script lang="ts">
  import {PokemonQuery} from "../generated/graphql"
  type Pokemon = PokemonQuery["pokemon"]
  export let pokemon:Pokemon
  const {id,name} = pokemon
</script>

<div>
  <h2>{id} : {name}</h2>
</div>