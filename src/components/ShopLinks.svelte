<script>
  import { shop } from '../lib/shop.js'
  import ListItem from './ListItem.svelte'
</script>

<ul>
  <ListItem href={shop.adminUrl} target="_blank">Admin</ListItem>
  <ListItem href={shop.customiserUrl} target="_blank">Customiser</ListItem>
  <ListItem href={shop.themeUrl} target="_blank">Theme link</ListItem>
  <ListItem href={''} target="_blank"></ListItem>
  <ListItem href={shop.customiserUrl} target="_blank">Customiser current page (TODO)</ListItem>
</ul>
