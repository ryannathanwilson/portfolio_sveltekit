<script lang="ts">
  import '$styles/global.scss';
  import Header from '$components/layout/Header.svelte';
  import Footer from '$components/layout/Footer.svelte';
  let isOpen: boolean = false;
  const toggleMenu = () => {
    isOpen = !isOpen;
  };
</script>

<Header {toggleMenu} {isOpen} />
<div class="wrapper" class:open={isOpen}>
  <slot />
</div>
<Footer />

<style lang="scss">
  .wrapper {
    transition: var(--transition-time) ease-in-out;
    &.open {
      transform: translateY(12rem);
    }
  }
</style>
