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

      <Icon name="account" />

      <button style="display: flex;align-items: center;">
        <Icon name="delete" />
        Delete
      </button>
    </div>
  </IconsProvider>
</div>
