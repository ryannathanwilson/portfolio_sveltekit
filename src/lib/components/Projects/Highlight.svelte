<script lang="ts">
	import ProjectPreview from './ProjectPreview.svelte';
	import type { ProjectInterface } from '$src/types';
	export let project: ProjectInterface;
</script>

<div class="highlight">
	<div class="quote">
		<p>{project.highlightDescription}</p>
		<div class="card">
			<div class="info">
				<h2 class="name">{project.client}</h2>
				<h3 class="project">{project.title}</h3>
			</div>
			<img src={project.clientURL} alt={project.client} class="client-portrait" />
		</div>
	</div>
	<div class="project-preview">
		<ProjectPreview {project} />
	</div>
</div>

<style lang="scss">
	.highlight {
		display: grid;
		grid-template-columns: repeat(3 1fr);
		grid-template-areas: 'left left right';
		border-bottom: solid 2px var(--accent2);
		padding: 4rem 0;
		margin-bottom: 2rem;
	}
	.quote {
		grid-area: 'left';
	}
	p {
		position: relative;
		margin: 3rem 6rem;
	}
	p::before {
		content: open-quote;
		position: absolute;
		left: -3rem;
		top: 0rem;
		font-size: 8rem;
		color: var(--accent-text);
	}
	p::after {
		content: close-quote;
		position: absolute;
		right: -3rem;
		bottom: -2rem;
		font-size: 8rem;
		color: var(--accent-text);
	}
	.card {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--m);
		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--s);
		}
		.client-portrait {
			border-radius: 50%;
			width: 6rem;
		}
	}
	.project-preview {
		grid-area: 'right';
	}
	@media (max-width: 900px) {
		.highlight {
			margin: auto;
			max-width: 700px;
			display: flex;
			flex-direction: column-reverse;
			gap: var(--l);
		}
		p {
			margin: 3rem 1.5rem;
		}
	}
</style>
