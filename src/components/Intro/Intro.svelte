<script>
</script>

<div id="intro" class="section">
  <div class="image">
    <img
      src="https://res.cloudinary.com/ryannathanwilson/image/upload/c_scale,w_1200/v1648230361/rnw/profile_BW.webp"
      alt="B/W profile of Ryan Nathan Wilson"
    />
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
</style>
