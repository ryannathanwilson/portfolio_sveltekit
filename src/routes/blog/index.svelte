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
</script>

<div class="wrapper">
  <ul>
    {#each posts as post}
      <li>
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  </ul>
</div>

<style>
  .wrapper {
    padding: 4rem 0;
    min-height: 70vh;
  }
</style>
