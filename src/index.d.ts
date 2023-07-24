import { SvelteComponentTyped } from "svelte";
export type TIconProps<T = string> = {
	name: T;
	size?: number;
	viewBox?: string;
};
export type TIconsProviderProps<T extends string = string> = {
	paths: Record<T, string>
}

declare global {
	type TSvelteIcons = "test";
}
declare module "@ayalab/svelte-context-icons" {
	export type TIconName = string;

	export const ICONS_KEY: Symbol;
	export class Icon extends SvelteComponentTyped<TIconProps<TIconName>, Record<string, any>, Record<string, any>> {}
	export class IconsProvider extends SvelteComponentTyped<
		TIconsProviderProps,
		Record<string, any>,
		Record<string, any>
	> {}
}