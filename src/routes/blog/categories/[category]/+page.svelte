<script lang="ts">
	import '$styles/gruvbox.css';
	import '$styles/markdown.scss';
	import type { PageData } from './$types';
	export let data: PageData;

	let { posts, category } = data;
	console.log('DATA', data);

	// let { title, date, categories, author = 'Ryan N Wilson' } = data.frontmatter;
	// type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	// $: component = data.component as unknown as C;
</script>

<div class="wrapper">
	<h1>
		{category} posts
	</h1>
	<ul>
		{#each posts as post}
			<li>
				<h2>
					<a href={`../${post.slug}`}>
						{post.title}
					</a>
				</h2>
				<h4>
					{post.date} by {post.author || 'Ryan N Wilson'}
				</h4>
				<div class="description">
					{post.description}
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.wrapper {
		padding: 8rem 0;
		min-height: 70vh;
	}
	h1 {
		text-align: left;
		margin-bottom: var(--l);
	}
	h4 {
		color: var(--accent-text);
	}
	li {
		margin-bottom: var(--l);
		/*border-bottom: 2px solid var(--accent);*/
		padding-bottom: var(--l);
	}
	.description {
		max-width: 40rem;
		color: var(--text-medium);
	}
</style>
