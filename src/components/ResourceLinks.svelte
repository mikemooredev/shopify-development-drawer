<script>
  import { shop } from '../lib/shop.js'

  import ListItem from './ListItem.svelte'
</script>

<ul>
  <ListItem href={`${shop.adminUrl}/products`} target="_blank">
    Products

    <ul slot="sub-list">
      <ListItem href={`${shop.adminUrl}/products`} target="_blank">Current product (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/products`} target="_blank">Current product preview (TODO)</ListItem>
    </ul>
  </ListItem>

  <ListItem href={`${shop.customiserUrl}/collections`} target="_blank">
    Collections

    <ul slot="sub-list">
      <ListItem href={`${shop.adminUrl}/collections`} target="_blank">Current collection (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/collections`} target="_blank">Current collection preview (TODO)</ListItem>
    </ul>
  </ListItem>

  <ListItem href={`${shop.customiserUrl}/pages`} target="_blank">
    Pages

    <ul slot="sub-list">
      <ListItem href={`${shop.adminUrl}/pages`} target="_blank">Current page (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/pages`} target="_blank">Current page preview (TODO)</ListItem>
    </ul>
  </ListItem>

  <ListItem href={`${shop.customiserUrl}/blogs`} target="_blank">
    Blogs

    <ul slot="sub-list">
      <ListItem href={`${shop.adminUrl}/blogs`} target="_blank">Current blog (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/blogs`} target="_blank">Current blog preview (TODO)</ListItem>
    </ul>
  </ListItem>

  <ListItem href={`${shop.customiserUrl}/articles`} target="_blank">
    Articles

    <ul slot="sub-list">
      <ListItem href={`${shop.adminUrl}/articles`} target="_blank">Current article (TODO)</ListItem>
      <ListItem href={`${shop.adminUrl}/articles`} target="_blank">Current article preview (TODO)</ListItem>
    </ul>
  </ListItem>
</ul>
