<script lang="ts">
	import { Icon, IconsProvider } from '@ayalab/svelte-context-icons';
	import { paths } from './../icons-config';
	import CodeBlock from '../lib/CodeBlock.svelte';

	const code = `<Icon name="delete" />`;
</script>

<IconsProvider {paths}>
	<div>
		<Icon name="delete" />
		<Icon name="minus" />

		<Icon name="close" />
		<Icon name="account" size={48} />

		<CodeBlock {code} />

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
	</div>
</IconsProvider>
