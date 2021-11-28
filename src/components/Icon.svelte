<script lang="ts">
  import { getContext } from "svelte";
  import { iconsKey } from "..";
  import type { Writable } from "svelte/store";

  export let name: string;
  export let size = 24;
  export let viewBox = "0 0 24 24";

  const paths = getContext(iconsKey) as Writable<Record<string, string>>;

  if (!paths) {
    console.error(
      "Svelte-context-icons: No icons paths found. You need to wrap your app in icons provider"
    );
  }

  $: path = paths && $paths[name];
</script>

<div class="context-icon" style="width:{size}px;height:{size}px">
  {#if path}
    <svg {viewBox} xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  {/if}
</div>

<style>
  .context-icon {
    display: inline-block;
    color: var(--context-icon-color);
  }
  svg {
    stroke: currentColor;
    fill: currentColor;
    stroke-width: 0;
    width: 100%;
    height: auto;
    max-height: 100%;
  }
</style>
