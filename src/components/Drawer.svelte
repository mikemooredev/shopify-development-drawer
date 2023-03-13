<script>
  export let hideDrawer = false

  import Header from './Header.svelte'
  import ShopLinks from './ShopLinks.svelte'
  import ResourceLinks from './ResourceLinks.svelte'
  import ObjectLinks from './ObjectLinks.svelte'
</script>

<aside class="sdd-Drawer" aria-hidden={hideDrawer}>
  <Header />
  <ShopLinks />
  <ResourceLinks />
  <ObjectLinks />
</aside>

<style>
  .sdd-Drawer {
    background-color: var(--colour-background);
    border-inline-end: 1px solid #000;
    height: 100vh;
    width: min(400px, 100%);

    position: fixed;
    top:0;
    bottom:0;
    left:0;

    overflow: auto;

    padding: 0 var(--spacing);
  }

  .sdd-Drawer[aria-hidden="true"] {
    display: none;
  }
</style>
