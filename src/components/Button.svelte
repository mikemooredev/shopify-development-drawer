<script>
  export let className = ''
  export let onClick = null
  export let ariaLabel = null
</script>

<button class="sdd-Button {className}" on:click={onClick} aria-label={ariaLabel}>
  <slot />
</button>

<style>
  .sdd-Button {
    display: grid;
    cursor: pointer;

    border: none;
    border-radius: 4px;
  }
</style>
