<script>
	export let data;
	let { categories } = data;
</script>

<div class="wrapper">
	<h1>Blog Post Tags</h1>
	<ul>
		{#each categories as category}
			<li>
				<a href={`categories/${category.toLowerCase()}`}>
					{category}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.wrapper {
		padding: 8rem 0;
		min-height: 70vh;
	}
	li {
		margin-bottom: 4px;
	}
	a {
		text-decoration: underline;
		text-underline-offset: 4px;
		&:hover {
			color: var(--text-medium);
		}
	}
</style>
