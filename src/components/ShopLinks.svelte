<script>
  import { shop } from '../lib/shop.js'

  import List from './List.svelte'
  import ListItem from './ListItem.svelte'
</script>

<List>
  <ListItem href={shop.adminUrl} target="_blank">Admin</ListItem>
  <ListItem href={shop.themeUrl} target="_blank">Theme link</ListItem>
  <ListItem href={shop.customiserUrl} target="_blank">Customiser</ListItem>
</List>
