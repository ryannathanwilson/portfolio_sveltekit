<script lang="ts">
  import '../styles/global.scss';
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
</script>

<Header />
<div class="wrapper">
  <slot />
</div>
<Footer />
