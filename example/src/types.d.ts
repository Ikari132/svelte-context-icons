declare module "@ayalab/svelte-context-icons" {
  import type { SvelteComponentTyped } from 'svelte';
  declare type TPaths = keyof typeof import("./icons-config").paths;
  interface IconProps {
    name: TPaths;
    size?: number;
  };
  declare type TIconProps = import("@ayalab/svelte-context-icons/index").TIconProps<TPaths>;

  export class Icon extends SvelteComponentTyped<TIconProps, {}, {}> {}
  export class IconsProvider extends SvelteComponentTyped<{ paths: Record<TPaths, string> }, {}, {}>{}
}