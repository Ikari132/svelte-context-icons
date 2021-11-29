import { SvelteComponentTyped } from "svelte";
export type TIconProps<T = string> = {
	name: T;
	size?: number;
	viewBox?: string;
};
export type TProviderProps = {
	paths: Record<string, string>;
};

declare module "@ayalab/svelte-context-icons" {
	export class Icon extends SvelteComponentTyped<TIconProps, {}, {}> {}
	export class IconsProvider extends SvelteComponentTyped<
		{ paths: Record<string, string> },
		{},
		{}
	> {}
}