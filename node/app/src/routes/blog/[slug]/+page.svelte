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
  <h1>{data.post.title}</h1>
  <hr />
</header>
<div class="container">
  <article class="content">
    {@html data.post.html}
  </article>
  <hr />
  <Bio />
</div>
