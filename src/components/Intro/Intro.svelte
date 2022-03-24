<script>
  import logo from '../../../static/Profile_BW.jpeg';
</script>

<div id="intro" class="section">
  <div class="image">
    <img src={logo} alt="B/W profile of Ryan Nathan Wilson" />
  </div>
  <div class="intro-text">
    <p>
      "I am a front end web developer with a technical background in Mechanical Engineering and
      Industrial Design. I've always loved working at the intersection of form and function;
      products that have to work well and be beautiful at the same time. Now I am bringing that same
      skillset into web development." <br /><br />- Ryan
    </p>
  </div>
</div>

<style>
  .section {
    display: flex;
    align-items: center;
  }
  .image {
    max-width: 400px;
    aspect-ratio: 0.75;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
  .intro-text {
    border-left: 2px solid var(--accent2);
    padding-left: 1rem;
  }
</style>
