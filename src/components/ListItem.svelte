<script>
  export let href
  export let target = ''
</script>

<li>
  <a href={href} target={target}>
    <slot />
  </a>

  <slot name="sub-list" />
</li>
