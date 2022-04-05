<script lang="ts">
  import Icon from '@iconify/svelte';
  import Burger from './Burger.svelte';
  import { mode } from '../../store';
  export let isOpen: boolean = false;
  export let toggleMenu: () => void;
  let theme = true;

  const toggleMode = () => {
    mode.update((m) => !m);
    theme = !theme;
    theme
      ? document.documentElement.classList.remove('theme-dark')
      : document.documentElement.classList.add('theme-dark');
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
    <div class="mode">
      <button on:click={toggleMode}>
        Mode{' '}
        {#if theme}
          <Icon icon="ic:baseline-mode-night" />
        {:else}
          <Icon icon="ic:baseline-light-mode" />
        {/if}
      </button>
    </div>
    <Burger {isOpen} {toggleMenu} />
  </nav>
</div>

<style lang="scss">
  .header {
    max-width: 100vw;
    position: fixed;
    width: 100%;
    background-color: var(--accent);
    color: var(--header-text);
    z-index: 100;
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
    color: var(--header-text);
  }
  .home {
    background-color: var(--accent);
    font-size: var(--l);
    z-index: 100;
  }
  .links {
    font-size: var(--m);
    margin-left: 3rem;
    text-transform: uppercase;
  }

  .mode {
    position: absolute;
    padding: 0 0.5rem;
    top: 0;
    right: 0;
    cursor: pointer;
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
      background-color: var(--accent);
      transform: translateY(-128px);
      transition: var(--transition-time) ease-in-out;
      .links {
        opacity: 0;
        transition: var(--transition-time) ease-in var(--transition-time);
      }
    }
    .mode {
      padding: 0 0.5rem;
      top: 0;
      right: 4rem;
      z-index: 100;
    }
    .open {
      .nav-links {
        transform: translateY(4rem);
        .links {
          opacity: 1;
        }
      }
    }
  }
</style>
