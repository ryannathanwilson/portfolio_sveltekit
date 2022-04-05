<script>
  import { mode } from '../../store';
  let theme;
  mode.subscribe((m) => {
    theme = m;
  });
  let imageSrcDark =
    'https://res.cloudinary.com/ryannathanwilson/image/upload/c_scale,w_1200/v1648230361/rnw/portrait-bg-black.webp';
  let imageSrcLight =
    'https://res.cloudinary.com/ryannathanwilson/image/upload/c_scale,w_1200/v1648230361/rnw/portrait-bg-white.webp';
</script>

<div id="intro" class="section">
  <div class="image">
    {#if theme}
      <img src={imageSrcLight} alt="B/W profile of Ryan Nathan Wilson" />
    {:else}
      <img src={imageSrcDark} alt="B/W profile of Ryan Nathan Wilson" />
    {/if}
  </div>
  <div class="intro-text">
    <p>
      "I am a full stack web developer with a technical background in Mechanical Engineering and
      Industrial Design. I've always loved working at the intersection of form and function;
      products that have to work well and be beautiful at the same time. Now I am bringing that same
      skillset into web development." <br /><br />- Ryan
    </p>
  </div>
</div>

<style lang="scss">
  .section {
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    margin: auto;
  }
  .image {
    grid-area: 'left';
    overflow: hidden;
    aspect-ratio: 0.75;
  }
  img {
    width: 100%;
  }
  .intro-text {
    grid-area: 'right';
    display: flex;
    align-items: center;
    p {
      border-left: 2px solid var(--accent2);
      padding-left: 1rem;
    }
  }
  @media (max-width: 600px) {
    .section {
      display: block;
    }
  }
</style>
