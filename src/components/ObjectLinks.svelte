<script>
  import List from './List.svelte'
  import ListItem from './ListItem.svelte'

  const liquidObjects = {
    'article': 'Article',
    'blog': 'Blog',
    'cart': 'Cart',
    'collection': 'Collection',
    'page': 'Page',
    'product': 'Product',
    'variant': 'Variant',
    'shop': 'Shop',
  }
</script>

<List>
  {#each Object.keys(liquidObjects) as key}
    <ListItem href={`https://shopify.dev/docs/api/liquid/objects/${key}`} target="_blank">{liquidObjects[key]}</ListItem>
  {/each}
</List>
