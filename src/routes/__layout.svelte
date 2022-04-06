<script context="module">
  export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
  import '$styles/global.scss';
  import Header from '$components/layout/Header.svelte';
  import Footer from '$components/layout/Footer.svelte';
  import PageTransition from '$components/layout/PageTransition.svelte';
  import { theme as storeTheme } from '../store';
  export let url;
  let isOpen: boolean = false;
  import BlogLayout from './blog/_blogLayout.svelte';
  const toggleMenu = () => {
    isOpen = !isOpen;
  };
  const closeMenu = () => {
    isOpen = false;
  };
  $: currentTheme = $storeTheme;
</script>

<main class={currentTheme}>
  <Header {toggleMenu} {closeMenu} {isOpen} />
  <PageTransition {url}>
    <div class="wrapper" class:open={isOpen}>
      <slot />
    </div>
  </PageTransition>
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
