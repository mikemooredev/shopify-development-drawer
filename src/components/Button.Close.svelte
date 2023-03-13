<script>
  import { dispatch } from '../lib/events.js'
  import Button from './Button.svelte'

  const handleClick = event => dispatch(event?.target, 'sdd:close')
</script>

<Button className="sdd-Button_Close" onClick={handleClick} ariaLabel="Close"></Button>

<style>
  :global(.sdd-Button_Close) {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: --color-foreground;
    filter: var(--filter);
    opacity: .75;
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: .5;
  }

  :global(.sdd-Button_Close:is(:hover,:focus)) {
    color: var(--colour-foreground--interaction);
    text-decoration: none;
    opacity: 1;
  }
</style>
