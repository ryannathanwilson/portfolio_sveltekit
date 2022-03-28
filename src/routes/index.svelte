<script>
  import SEO from '$components/SEO/index.svelte';
  import metadata from '$components/SEO/metadata';
  import Intro from '../components/Intro';
  import Projects from '../components/Projects';
  import Contact from '../components/Contact';
  import { Modals, closeModal } from 'svelte-modals';

  const handleClose = () => {
    document.documentElement.style.overflow = 'scroll';
    closeModal();
  };
</script>

<SEO />
<Intro />
<Projects />
<Contact />

<Modals>
  <div slot="backdrop" class="backdrop" on:click={handleClose} />
</Modals>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
