<script>
  import { dispatch } from '../utils.js'
  import Button from './Button.svelte'

  const handleClick = event => dispatch(event?.target, 'sdd:open')
</script>

<Button className="sdd-Button_Open" onClick={handleClick}>
  <slot />
</Button>

<style>
  :global(.sdd-Button_Open) {
    position: fixed;
    bottom: 30px;
    left: 30px;
  }
</style>
