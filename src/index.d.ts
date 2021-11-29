import { SvelteComponentTyped } from "svelte";

declare module '@ayalab/svelte-context-icons' {
	import Icon from "./components/Icon.svelte";
	import IconsProvider from "./components/Provider.svelte";
	export const iconsKey: unique symbol;
	export { Icon, IconsProvider };
	export type TIconProps<T = string> = {
	    name: T;
	    size?: number;
	    viewBox?: string;
	};
	export type TProviderProps = {
	    paths: Record<string, string>;
	};
}

declare module '@ayalab/svelte-context-icons/components/Icon.svelte' {
	interface IconProps {
		name: string;
		size: any;
		viewBox: any;
	}

	class Icon extends SvelteComponentTyped<
		IconProps,
		{  },
		{  }
	> {}

	export default Icon;
}

declare module '@ayalab/svelte-context-icons/components/Provider.svelte' {
	interface ProviderProps {
		paths: any;
	}

	class Provider extends SvelteComponentTyped<
		ProviderProps,
		{  },
		{  }
	> {}

	export default Provider;
}

