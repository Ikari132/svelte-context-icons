<script lang="ts">
  import { setContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { writable } from "svelte/store";
  import { ICONS_KEY } from "../constants";

  export let paths = {};

  const iconsStore = writable(paths) as Writable<
    Record<keyof typeof paths, string>
  >;

  setContext(ICONS_KEY, iconsStore);

  $: {
    iconsStore.set(paths);
  }
</script>

<slot />

<style>
  :global(:root) {
    --context-icon-size: 24px;
    --context-icon-color: rgba(0, 0, 0, 0.8);
  }
</style>
