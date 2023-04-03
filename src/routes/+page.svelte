<script>
	import SEO from '$src/lib/components/SEO/index.svelte';
	import Intro from '$src/lib/components/Intro';
	import Projects from '$src/lib/components/Projects';
	import Contact from '$src/lib/components/Contact';
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
	<div
		slot="backdrop"
		class="backdrop"
		on:click={handleClose}
		on:keydown={() => {
			console.log('...');
		}}
	/>
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
