<script>
  import { listen } from './lib/events.js'
  import { onMount } from 'svelte'

  import Drawer from './components/Drawer.svelte'
  import Button_Open from './components/Button.Open.svelte'

  let mainEl
  let hideDrawer = false

  $: hideDrawer

  onMount(() => {
    listen(mainEl, 'sdd:open', () => { hideDrawer = false })
    listen(mainEl, 'sdd:close', () => { hideDrawer = true })
  })
</script>

<main bind:this={mainEl}>
  <Drawer hideDrawer={hideDrawer} />

  <Button_Open>
    Open
  </Button_Open>
</main>
