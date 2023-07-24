<div class="docs">
	<nav class="docs-nav">
		<h1>Svelte context icons</h1>
		<div class="links">
			<a href="/">Main</a>
			<a href="/">Usage with Typescript</a>
		</div>
	</nav>

	<main class="docs-main">
		<slot />
	</main>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}
	:global(html, body) {
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
	}
	.docs {
		display: grid;
		grid-template-columns: 300px 1fr;

		width: 100%;
		max-width: 100%;

		height: 100vh;
		max-height: 100vh;

		padding: 10px;
		background: #f2f2f2;
	}

	.docs-nav {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.docs-main {
		width: 100%;
		border-radius: 10px;
		padding: 10px;
		background: #fff;
	}
	.links {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	.links a {
		display: block;
		text-decoration: none;
		padding: 10px;
	}
	.links a:hover {
		background: #f9f9f9;
		border-radius: 4px;
	}
</style>
