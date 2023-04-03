<script lang="ts">
	import type { ProjectInterface } from '$src/types';

	import Icon from '@iconify/svelte';
	import { openModal } from 'svelte-modals';
	import Modal from './Modal.svelte';
	export let project: ProjectInterface;

	function handleClick() {
		// RNW TODO: handle keydown
		openModal(Modal, { project });
		document.documentElement.style.overflow = 'hidden';
		console.log('test');
	}
</script>

<div class="container" role="button" on:click={handleClick} on:keydown={handleClick}>
	<img src={project.imageSquare} alt={project.title} />

	<div class="cover">
		<div class="top">
			<h2>{project.title}</h2>
			<h3>{project.tags}</h3>
		</div>

		<div class="bottom">
			<div class="launch-modal">Learn More <Icon icon="akar-icons:link-out" /></div>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		position: relative;
		aspect-ratio: 1;
		cursor: pointer;
		box-shadow: 0 0 1.5rem 0 var(--shadow);
		text-align: center;
		overflow: hidden;
		border-radius: var(--radius);
		transition: var(--transition-time) ease-in;

		img {
			width: 100%;
		}

		.cover {
			display: grid;
			grid-template-rows: 1fr 1fr;
			grid-template-areas: 'top' 'bottom';
			position: absolute;
			background-color: var(--bg-light);
			border: 1px solid var(--text-medium);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0;
			transition: var(--transition-time) ease-in;

			.top,
			.bottom {
				/*position: absolute;*/
				/*left: 0;*/
				/*right: 0;*/
				/*height: 150px;*/
				padding: var(--m);
				background-color: transparent;
				display: flex;
				flex-direction: column;
				gap: var(--xs);
				justify-content: center;
				align-items: center;
				opacity: 0;
				transition: all var(--transition-time) ease-in;
			}

			.top {
				grid-area: 'top';
				transform: translateY(10%);
				h2,
				h3 {
					display: block;
				}
			}

			.bottom {
				grid-area: 'bottom';
				transform: translateY(10%);
				.launch-modal {
					color: var(--accent2);
				}
			}
		}
	}
	@media (min-width: 1001px) {
		.container:hover {
			transform: scale(1.02);
			.cover {
				opacity: 0.95;
				.top,
				.bottom {
					opacity: 1;
					transform: translateY(0);
				}
			}
		}
	}
	@media (max-width: 1000px) {
		.container {
			.cover {
				opacity: 0.9;
				.top,
				.bottom {
					opacity: 1;
					transform: translateY(0);
				}
			}
		}
	}
</style>
