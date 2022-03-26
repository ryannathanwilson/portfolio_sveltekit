<script context="module" lang="ts">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category;
    const response = await fetch('/api/posts.json');
    const allPosts = await response.json();

    const matchingPosts = allPosts.filter((post) => {
      if (post.meta.categories && post.meta.categories.length !== 0) {
        return post.meta.categories.includes(currentCategory);
      } else {
        return false;
      }
    });
    console.log(matchingPosts);

    return {
      props: {
        posts: matchingPosts
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
