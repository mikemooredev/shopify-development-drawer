<script>
  import { listen } from './utils.js'
  import { onMount } from 'svelte'

  import Drawer from './lib/Drawer.svelte'
  import Button_Open from './lib/Button.Open.svelte'

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
