<script>
	export let data;
	let { posts } = data;
</script>

<div class="wrapper">
	<h1>Blog posts</h1>
	<ul>
		{#each posts as post}
			<li>
				<h2>
					<a href={`blog/${post.slug}`}>
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
