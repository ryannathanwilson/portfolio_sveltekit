<script lang="ts">
  import '$styles/global.scss';
  import Header from '$components/layout/Header.svelte';
  import Footer from '$components/layout/Footer.svelte';
  import { theme as storeTheme } from '../store';
  let isOpen: boolean = false;
  import BlogLayout from './blog/_blogLayout.svelte';
  const toggleMenu = () => {
    isOpen = !isOpen;
  };
  $: currentTheme = $storeTheme;
</script>

<main class={currentTheme}>
  <Header {toggleMenu} {isOpen} />
  <div class="wrapper" class:open={isOpen}>
    <slot />
  </div>
  <Footer />
</main>

<style lang="scss">
  .wrapper {
    transition: var(--transition-time) ease-in-out;
    &.open {
      transform: translateY(12rem);
    }
  }
</style>
