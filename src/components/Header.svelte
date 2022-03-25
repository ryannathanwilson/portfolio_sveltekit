<script lang="ts">
  import Burger from './Burger.svelte';
  let isOpen: boolean = false;
  const toggleMenu = () => {
    isOpen = !isOpen;
  };
</script>

<div class="header">
  <nav class="wrapper" class:open={isOpen}>
    <div class="home"><a href="/">RyanNathan</a></div>
    <div class="nav-links">
      <div class="links"><a href="/#projects">Projects</a></div>
      <div class="links"><a href="/blog">Blog</a></div>
      <div class="links"><a href="/#contact">Contact</a></div>
    </div>
    <Burger {isOpen} {toggleMenu} />
  </nav>
</div>

<style lang="scss">
  .header {
    max-width: 100vw;
    position: fixed;
    width: 100%;
    background-color: var(--header);
    color: var(--primary-light);
    z-index: 1000;
  }
  nav {
    display: flex;
    flex-direction: row;
  }
  nav div {
    line-height: 4rem;
    font-weight: 700;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
  }
  .home {
    background-color: var(--header);
    font-size: var(--l);
    z-index: 100;
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
    .nav-links {
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: var(--header);
      transform: translateY(-128px);
      transition: var(--transition-time) ease-in-out;
      .links {
        opacity: 0;
        transition: var(--transition-time) ease-in var(--transition-time);
      }
    }
    .open {
      .nav-links {
        transform: translateY(64px);
        .links {
          opacity: 1;
        }
      }
    }
  }
</style>
