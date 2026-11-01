<script>
  import Bio from '$lib/components/Bio.svelte';
  export let data;
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #AAA;
    text-transform: uppercase;
    font-family: Rubik, sans-serif;
    font-weight: 600;
  }

  header hr {
    min-width: 100px;
    width: 30%;
  }

  header p.tags {
    text-transform: none;
    font-weight: 600;
  }

  .tags a {
    margin-right: 0.6em;
  }

  header p.share,
  header p.updated {
    text-transform: none;
  }

  .share a {
    margin-right: 0.8em;
  }

  .with-toc {
    margin: 0 auto;
    max-width: 42em;
  }

  .with-toc.has-toc {
    display: grid;
    gap: 2em;
    grid-template-columns: minmax(0, 42em) 14em;
    max-width: 60em;
  }

  aside {
    align-self: start;
    font-size: 0.9rem;
    position: sticky;
    top: 1em;
  }

  aside p {
    font-family: Rubik, sans-serif;
    font-weight: 600;
    margin: 0 0 0.4em;
  }

  aside ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  aside li {
    margin: 0.3em 0;
  }

  aside li.sub {
    margin-left: 1em;
  }

  aside a {
    text-decoration: none;
  }

  @media (max-width: 1020px) {
    .with-toc.has-toc {
      grid-template-columns: minmax(0, 42em);
    }

    aside {
      order: -1;
      position: static;
    }
  }
</style>

<svelte:head>
  <title>{data.post.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.post.title} />
  <meta name="Description" content={data.post.excerpt} />
  <meta property="og:description" content={data.post.excerpt} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" value={data.post.title} />
  <meta name="twitter:description" content={data.post.excerpt} />
  <meta name="twitter:label1" value="Published on" />
  <meta
    name="twitter:data1"
    value={new Date(data.post.printDate).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })} />
  <meta name="twitter:label2" value="Reading Time" />
  <meta name="twitter:data2" value={data.post.printReadingTime} />
</svelte:head>

<header>
  <p>{data.post.printDate} ~ {data.post.printReadingTime}</p>
  {#if data.post.printUpdated}
    <p class="updated">更新 {data.post.printUpdated}</p>
  {/if}
  {#if data.post.tags.length}
    <p class="tags">
      {#each data.post.tags as tag, i}
        {#if i}&nbsp;{/if}
        <a href="/blog/tag/{encodeURIComponent(tag)}">{tag}</a>
      {/each}
    </p>
  {/if}
  <p class="share">
    <a href="https://twitter.com/intent/tweet?text={encodeURIComponent(data.post.title)}&url={encodeURIComponent(data.post.url)}" target="_blank" rel="noreferrer">X</a>
    <a href="https://b.hatena.ne.jp/entry/panel/?url={encodeURIComponent(data.post.url)}" target="_blank" rel="noreferrer">はてブ</a>
  </p>
  <h1>{data.post.title}</h1>
  <hr />
</header>
<div class="with-toc" class:has-toc={data.post.toc.length}>
  <div>
    <article class="content">
      {@html data.post.html}
    </article>
    <hr />
    <Bio />
  </div>
  {#if data.post.toc.length}
    <aside>
      <p>目次</p>
      <ol>
        {#each data.post.toc as item}
          <li class:sub={item.depth === 3}><a href="#{item.id}">{item.text}</a></li>
        {/each}
      </ol>
    </aside>
  {/if}
</div>
