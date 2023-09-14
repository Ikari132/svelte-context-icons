<script lang="ts">
	import { Icon, IconsProvider } from '@ayalab/svelte-context-icons';
	import { paths, anotherPaths } from './../icons-config';
	import CodeBlock from '../lib/CodeBlock.svelte';

	const basicCode = `
	<Icon name="delete" />
	<Icon name="minus" />
	`;

	const advancedCode = `
	<Icon name="close" />
	<Icon name="account" size={48} />

	<div style="--context-icon-size:10px;">
		<Icon name="account" />
	</div>
	`;
</script>

<IconsProvider paths={{ ...paths, ...anotherPaths }}>
	<section>
		<h2>Basic usage</h2>
		<p>You can use the icons like this</p>
		<Icon name="delete" />
		<Icon name="minus" />
		<CodeBlock code={basicCode} />
	</section>
	<section>
		<h2>Advanced usage</h2>
		<p>You can change icons size in a different way</p>
		<Icon name="close" />
		<Icon name="account" size={48} />

		<div style="--context-icon-size:10px;">
			<Icon name="account" />
		</div>
		<CodeBlock code={advancedCode} />
	</section>
	<!-- <div>
		<Icon name="close" />
		<Icon name="account" size={48} />

		<div style="--context-icon-size:10px;">
			<Icon name="account" />
		</div>

		<div class="wrapper">
			<Icon name="account" />
		</div>

		<button style="display: flex;align-items: center;">
			<Icon name="delete" />
			Delete
		</button>
	</div> -->
</IconsProvider>
