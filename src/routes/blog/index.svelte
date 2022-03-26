<script context="module" lang="ts">
  export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json');
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts
      }
    };
  };
</script>

<script>
  export let posts;
  export let author = 'Ryan N Wilson';
</script>

<div class="wrapper">
  <h1>Blog posts</h1>
  <ul>
    {#each posts as post}
      <li>
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        <h4>
          {post.meta.date} by {author}
        </h4>
        <div class="description">
          {post.meta.description}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .wrapper {
    padding: 8rem 0;
    min-height: 70vh;
  }
  h1 {
    text-align: left;
    margin-bottom: var(--l);
  }
  h4 {
    color: var(--accent);
  }
  li {
    margin-bottom: var(--l);
    /*border-bottom: 2px solid var(--accent);*/
    padding-bottom: var(--l);
  }
  .description {
    max-width: 40rem;
    color: var(--middle);
  }
</style>
