<script lang="ts">
  import Summary from "./summary.svelte";
  export let pokemons:{name:string,image:string,id:number}[]

  console.log(pokemons)
</script>

<div class="container">
  {#each pokemons as {name,image,id} (id)}
    <Summary {name} imageSrc={image} {id} />
  {/each}
</div>

<style>
  .container{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>