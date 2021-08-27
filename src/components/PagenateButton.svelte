<script lang="ts">
  export let page:number
  export let link:string | null = null
</script>

{#if link}
  <a href={link}>
    <button class="link-button">{page}</button>
  </a>
{:else}
  <button class="disabled-button">{page}</button>
{/if}

<style>
  button{
    border: solid 1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
  }

  .link-button:hover{
    background-color: lightgray;
  }

  .disabled-button{
    background-color: gray;
  }
</style>
