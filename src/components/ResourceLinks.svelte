<script>
  import { shop } from '../lib/shop.js'

  import List from './List.svelte'
  import ListItem from './ListItem.svelte'
</script>

<List>
  <ListItem href={`${shop.adminUrl}/products`} target="_blank">
    Products

    <List slot="sub-list">
      <ListItem href={`${shop.adminUrl}/products`} target="_blank">Current product (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/products`} target="_blank">Current product preview (TODO)</ListItem>
    </List>
  </ListItem>

  <ListItem href={`${shop.customiserUrl}/collections`} target="_blank">
    Collections

    <List slot="sub-list">
      <ListItem href={`${shop.adminUrl}/collections`} target="_blank">Current collection (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/collections`} target="_blank">Current collection preview (TODO)</ListItem>
    </List>
  </ListItem>

  <ListItem href={`${shop.customiserUrl}/pages`} target="_blank">
    Pages

    <List slot="sub-list">
      <ListItem href={`${shop.adminUrl}/pages`} target="_blank">Current page (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/pages`} target="_blank">Current page preview (TODO)</ListItem>
    </List>
  </ListItem>

  <ListItem href={`${shop.customiserUrl}/blogs`} target="_blank">
    Blogs

    <List slot="sub-list">
      <ListItem href={`${shop.adminUrl}/blogs`} target="_blank">Current blog (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/blogs`} target="_blank">Current blog preview (TODO)</ListItem>
    </List>
  </ListItem>

  <ListItem href={`${shop.customiserUrl}/articles`} target="_blank">
    Articles

    <List slot="sub-list">
      <ListItem href={`${shop.adminUrl}/articles`} target="_blank">Current article (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/articles`} target="_blank">Current article preview (TODO)</ListItem>
    </List>
  </ListItem>
</List>
