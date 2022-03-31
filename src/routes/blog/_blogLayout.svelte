<script lang="ts">
  import '$styles/gruvbox.css';
  import '$styles/markdown.scss';
  export let title;
  export let date;
  export let categories = [];
  export let author = 'Ryan N Wilson';
</script>

<div class="wrapper">
  <div class="post-wrapper">
    <div class="header">
      <h1>{title}</h1>
      <div class="info">
        <p>{author} | {date}</p>
        <div class="tags">
          {#if categories.length}
            <h3>Tags:</h3>
            <ul>
              {#each categories as category}
                <li>
                  <a href="/blog/categories/{category}">
                    {category}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    </div>
    <slot />
  </div>
</div>

<style lang="scss">
  .info {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-bottom: var(--l);
  }
  .header h1 {
    color: var(--text-dark);
    text-align: left;
  }
  p,
  h3 {
    font-size: var(--m);
    text-transform: uppercase;
    font-weight: 700;
    color: var(--text-medium);
  }
  .tags {
    border: 2px solid var(--text-medium);
    border-radius: var(--radius);
    padding: 0.2rem 1rem;
  }
  .post-wrapper {
    margin: auto;
    max-width: 50rem;
  }
  .wrapper {
    padding: 8rem 0;
    min-height: 70vh;
  }
</style>
