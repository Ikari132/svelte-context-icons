<script lang="ts">
  import { getContext } from "svelte";
  import { ICONS_KEY } from "../constants";
  import type { Writable } from "svelte/store";

  export let name: string;
  export let size: number = null;
  export let viewBox = "0 0 24 24";

  const paths = getContext(ICONS_KEY) as Writable<Record<string, string>>;

  if (!paths) {
    console.error(
      "Svelte-context-icons: No icons paths found. You need to wrap your app in icons provider"
    );
  }

  let el: HTMLElement;

  $: {
    if (el && size) {
      el.style.setProperty("--context-icon-size", size + "px");
    }
  }

  $: path = paths && $paths[name];
</script>

<div bind:this={el} class="context-icon">
  {#if path}
    <svg {viewBox} xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  {/if}
</div>

<style>
  .context-icon {
    --context-icon-width: var(--context-icon-size);
    --context-icon-height: var(--context-icon-size);

    width: var(--context-icon-width);
    height: var(--context-icon-height);

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
