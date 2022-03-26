<script lang="ts">
  import '$styles/global.scss';
  import Header from '$components/layout/Header.svelte';
  import Footer from '$components/layout/Footer.svelte';
</script>

<Header />
<div class="wrapper">
  <slot />
</div>
<Footer />
