<script lang="ts">
  import { setContext } from "svelte";
  import { Writable } from "svelte/store";
  import { writable } from "svelte/store";
  import { iconsKey } from "..";

  export let paths = {};

  const iconsStore = writable(paths) as Writable<
    Record<keyof typeof paths, string>
  >;

  setContext(iconsKey, iconsStore);

  $: {
    iconsStore.set(paths);
  }
</script>

<slot />

<style>
  :root {
    --context-icon-color: rgba(0, 0, 0, 0.8);
  }
</style>
