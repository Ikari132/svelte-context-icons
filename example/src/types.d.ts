declare module "@ayalab/svelte-context-icons" {
  import type { SvelteComponentTyped } from 'svelte';
  declare type TPaths = keyof typeof import("./icons-config").paths;

  export type TIconName = TPaths;

  declare type TIconProps = import("@ayalab/svelte-context-icons/index").TIconProps<TPaths>;
  declare type TProviderProps = import("@ayalab/svelte-context-icons/index").TIconsProviderProps<TPaths>;

  export class Icon extends SvelteComponentTyped<TIconProps, {}, {}> {}
  export class IconsProvider extends SvelteComponentTyped<TProviderProps, {}, {}>{}
}