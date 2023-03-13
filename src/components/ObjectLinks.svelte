<script>
  import { shop } from '../lib/shop.js'

  import List from './List.svelte'
  import ListItem from './ListItem.svelte'
</script>

<h3> Related Objects </h3>

<List>
  {#each shop.objects as object}
    <ListItem href={object.url} target="_blank">
      {object.name}
    </ListItem>
  {/each}
</List>
