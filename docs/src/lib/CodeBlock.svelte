<script lang="ts">
	export let code: string;

	function handleCopy() {
		navigator.clipboard.writeText(code);
	}
</script>

<div>
	<button on:click={handleCopy}>Copy</button>
	<pre>
		<code>{code}</code>
	</pre>
</div>

<style>
	div {
		position: relative;
		padding: 10px;
		background: #333;
		color: #fff;

		border-radius: 4px;
	}
	button {
		position: absolute;
		top: 0;
		right: 0;
	}
	pre {
		margin: 0;
	}
</style>
