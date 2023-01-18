import { SvelteComponentTyped } from "svelte";
export type TIconProps<T = string> = {
	name: T;
	size?: number;
	viewBox?: string;
};
export type TIconsProviderProps<T extends string = string> = {
	paths: Record<T, string>
}

declare module "@ayalab/svelte-context-icons" {
	export const ICONS_KEY: Symbol;
	export class Icon extends SvelteComponentTyped<TIconProps, {}, {}> {}
	export class IconsProvider extends SvelteComponentTyped<
		TIconsProviderProps,
		{},
		{}
	> {}
}