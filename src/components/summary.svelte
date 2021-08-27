<script lang="ts">
  export let name:string
  export let imageSrc:string
  export let id:number
</script>

<a href="/pokemon/{id}" style="display: contents;">
  <div>
    <p>{name}</p>
    <img src={imageSrc} alt={name} />
  </div>
</a>

<style>
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px ;
    width: 300px;
  }
  div:hover{
    background-color: lightgray;
  }
</style>