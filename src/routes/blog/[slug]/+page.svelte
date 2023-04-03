<script lang="ts">
	import '$styles/gruvbox.css';
	import '$styles/markdown.scss';
	import type { PageData } from './$types';
	export let data: PageData;
	let { title, date, categories, author = 'Ryan N Wilson' } = data.frontmatter;
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="wrapper">
	<div class="post-wrapper">
		<div class="header">
			<h1>{title}</h1>
			<div class="info">
				<p>{author} | {date}</p>
				<div class="tags">
					{#if categories.length}
						<h3>Tags:</h3>
						<ul>
							{#each categories as category}
								<li>
									<a href={`/blog/categories/${category.toLowerCase()}`}>
										{category}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		</div>
		<svelte:component this={component} />
	</div>
</div>

<style lang="scss">
	.info {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		margin-bottom: var(--l);
	}
	.header h1 {
		color: var(--text-dark);
		text-align: left;
	}
	p,
	h3 {
		font-size: var(--m);
		text-transform: uppercase;
		font-weight: 700;
		color: var(--text-medium);
	}
	.tags {
		border: 2px solid var(--text-medium);
		border-radius: var(--radius);
		padding: 0.2rem 1rem;
	}
	.post-wrapper {
		margin: auto;
		max-width: 50rem;
	}
	.wrapper {
		padding: 8rem 0;
		min-height: 70vh;
	}
</style>
