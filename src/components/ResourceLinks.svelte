<script>
  import { shop } from '../lib/shop.js'

  import List from './List.svelte'
  import ListItem from './ListItem.svelte'
</script>

{#if shop.resourceType}
  <List>
    <ListItem href={`${shop.adminUrl}/${shop.resourceType}`} target="_blank">
      {shop.resourceName}
    </ListItem>

    <ListItem href={`${shop.accentuateUrl}`} target="_blank">
      Accentuate
    </ListItem>
  </List>
{/if}
