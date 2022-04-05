<script>
  import SEO from '$components/SEO/index.svelte';
  import Intro from '$components/Intro';
  import Projects from '$components/Projects';
  import Contact from '$components/Contact';
  import { Modals, closeModal } from 'svelte-modals';

  export let mode;

  const handleClose = () => {
    document.documentElement.style.overflow = 'scroll';
    closeModal();
  };
</script>

<SEO />
<Intro {mode} />
<Projects />
<Contact />

<Modals>
  <div slot="backdrop" class="backdrop" on:click={handleClose} />
</Modals>

<style>
  .backdrop {
    position: fixed;
    z-index: 150;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--bg-dark);
    opacity: 0.7;
  }
</style>
