<script>
  export let href
  export let target = ''
</script>

{#if href}
  <li>
    <a href={href} target={target}>
      <slot />
    </a>

    <slot name="sub-list" />
  </li>
{/if}

<style>
  a {
    display: block;
    color: var(--colour-foreground);

    padding: var(--spacing-half) 0;

    text-decoration: none;
  }

  a:is(:hover,:focus) {
    color: var(--colour-foreground--interaction);
  }
</style>
