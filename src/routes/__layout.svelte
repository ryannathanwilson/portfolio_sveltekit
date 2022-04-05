<script lang="ts">
  import '$styles/global.scss';
  import Header from '$components/layout/Header.svelte';
  import Footer from '$components/layout/Footer.svelte';
  let isOpen: boolean = false;
  let mode: boolean = true;
  const toggleMenu = () => {
    isOpen = !isOpen;
  };
  const toggleMode = () => {
    mode = !mode;
    console.log(mode);
    mode
      ? document.documentElement.classList.remove('theme-dark')
      : document.documentElement.classList.add('theme-dark');
  };
</script>

<Header {toggleMenu} {isOpen} {toggleMode} />
<div class="wrapper" class:open={isOpen}>
  <slot {mode} />
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
