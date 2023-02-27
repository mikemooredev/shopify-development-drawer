<script>
  export let className = ''
  export let onClick = null
</script>

<button class="sdd-Button {className}" on:click={onClick}>
  <slot />
</button>

<style>
  .sdd-Button {
    display: block;
  }
</style>
