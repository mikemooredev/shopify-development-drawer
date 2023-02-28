<script>
  import { dispatch } from '../lib/events.js'
  import Button from './Button.svelte'

  const handleClick = event => dispatch(event?.target, 'sdd:close')
</script>

<Button className="sdd-Button_Close" onClick={handleClick}>
  <slot />
</Button>

<style>
  :global(.sdd-Button_Close) {
    margin: 5px;
  }
</style>
