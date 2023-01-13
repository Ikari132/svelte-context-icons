<script lang="ts">
  import { Icon, IconsProvider } from "@ayalab/svelte-context-icons";
  import { paths } from "./icons-config";
</script>

<div>
  Test
  <IconsProvider {paths}>
    <div>
      <Icon name="delete" />
      <Icon name="minus" />

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
    </div>
  </IconsProvider>
</div>

<style>
  :global(body .wrapper .context-icon) {
    background-color: red;
    --context-icon-width: 48px;
  }
</style>
