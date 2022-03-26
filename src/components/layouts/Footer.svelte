<script>
  import Icon from '@iconify/svelte';
</script>

<footer id="footer">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="mountains"
    viewBox="0 0 200 20"
    preserveAspectRatio="none"
  >
    <path id="back" d="m130 20h-130l70-20 z" />
    <path id="front" d="m200 20h-200l160-20 z" />
  </svg>
  <div class="content">
    <div class="footer-content">
      <div class="column" id="hire">
        <div class="title">
          <h3>Hire Me</h3>
          <div>
            If you like my work and want to talk about doing a project together, don't hesitate to
            reach out.
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <h3>Contact</h3>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/rnw" target="_blank" rel="external"
            ><Icon icon="akar-icons:linkedin-box-fill" /> LinkedIn
          </a>
        </div>
        <div>
          <a href="https://github.com/ryannathanwilson" target="_blank" rel="external"
            ><Icon icon="akar-icons:github-fill" /> Github
          </a>
        </div>
        <div>
          <a href="/"><Icon icon="ic:baseline-web-asset" /> ryannathanwilson.com </a>
        </div>
      </div>
      <div class="column">
        <div class="title">
          <h3>Favorite Content</h3>
        </div>
        <div>
          <a href="/#projects">My Projects</a>
        </div>
        <div>
          <a href="/blog">Blog</a>
        </div>
      </div>
      <div class="column">
        <div id="tech">
          <div>This website is powered by:</div>
          <div>
            Svelte + SvelteKit{' '}<Icon icon="file-icons:svelte" />
          </div>
          <div>&#169; 2020 - {new Date().getFullYear()} Ryan N Wilson</div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  .mountains {
    display: block;
    width: 100%;
    margin-bottom: -1px;
    #front {
      fill: var(--dark);
    }
    #back {
      fill: var(--middle);
    }
  }
  .content {
    position: relative;
    width: 100%;
    background: var(--dark);
    margin: 0;
    color: white;
    padding: 5rem 2rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .footer-content {
    display: flex;
    max-width: 1000px;
    margin: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    div {
      padding: 0.3rem 0;
    }
    .column {
      display: inline-block;
      padding: 0;
      margin: 1rem 0.5rem;
      font-size: 0.8rem;
      flex-shrink: 0;
    }
    #hire {
      max-width: 300px;
    }
    #tech {
      width: 220px;
      border: 1px solid var(--primary-light);
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
    }
  }
</style>
