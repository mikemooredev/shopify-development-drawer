<script>
  import Button_Close from './Button.Close.svelte'
</script>

<header class="sdd-Header">
  <Button_Close>Close</Button_Close>
</header>

<style>
  .sdd-Header {
    display: flex;
    justify-content: flex-end;
    border-block-end: 1px solid var(--colour-border);

    padding: var(--spacing) 0;
  }
</style>
