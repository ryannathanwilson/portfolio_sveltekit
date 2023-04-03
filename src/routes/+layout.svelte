<script lang="ts">
	import '$styles/global.scss';
	import Header from '$src/lib/components/layout/Header.svelte';
	import Footer from '$src/lib/components/layout/Footer.svelte';
	// import { theme as storeTheme } from '../store';

	let isOpen = false;
	const toggleMenu = () => {
		isOpen = !isOpen;
	};
	const closeMenu = () => {
		isOpen = false;
	};
	// $: currentTheme = $storeTheme;
</script>

<main class="theme-light">
	<Header {toggleMenu} {closeMenu} {isOpen} />
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
