<div>
  <nav class="wrapper">
    <li class="home"><a href="/">RyanNathan</a></li>
    <li class="links"><a href="/#projects">Projects</a></li>
    <li class="links"><a href="/blog">Blog</a></li>
    <li class="links"><a href="/#contact">Contact</a></li>
  </nav>
</div>

<style lang="scss">
  div {
    position: fixed;
    width: 100%;
    background-color: var(--header);
    color: var(--primary-light);
  }
  nav {
    display: flex;
    flex-direction: row;
  }
  li {
    line-height: 4rem;
    font-weight: 700;
  }
  .home {
    font-size: var(--l);
  }
  .links {
    font-size: var(--m);
    margin-left: 3rem;
    text-transform: uppercase;
  }
  @media (max-width: 1000px) {
    nav {
      flex-direction: column;
    }
  }
</style>
