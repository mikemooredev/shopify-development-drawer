<script>
  export let hideDrawer = false

  import Header from './Header.svelte'
  import ListItem from './ListItem.svelte'
  import Button from './Button.svelte'
</script>

<aside class="sdd-Drawer" aria-hidden={hideDrawer}>
  <Header />

  <ul>
    <ListItem href={""}>Item 1</ListItem>
    <ListItem href={""}>Item 1</ListItem>
    <ListItem href={""}>Item 1</ListItem>
  </ul>

  <Button>Click 11</Button>
  <Button>Click 12</Button>
  <Button>Click 13</Button>
</aside>

<style>
  .sdd-Drawer {
    border-inline-end: 1px solid #000;
    height: 100vh;
    width: min(400px, 100%);

    position: fixed;
    top:0;
    bottom:0;
    left:0;
  }

  .sdd-Drawer[aria-hidden="true"] {
    display: none;
  }
</style>
