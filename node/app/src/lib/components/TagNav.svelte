<script>
  export let tags = [];
  export let current = '';
</script>

<nav class="tag-nav">
  <a href="/blog" class:selected={!current}>すべて</a>
  {#each tags as item}
    <a
      href="/blog/tag/{encodeURIComponent(item.tag)}"
      class:selected={item.tag === current}
    >{item.tag} {item.count}</a>
  {/each}
</nav>

<style>
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4em 0.6em;
    margin: 0 0 2em;
    font-family: Rubik, sans-serif;
    font-weight: 600;
  }

  a {
    text-decoration: none;
  }

  a.selected {
    text-decoration: underline;
  }
</style>
