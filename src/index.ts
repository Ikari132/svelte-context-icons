import Icon from "./components/Icon.svelte";
import IconsProvider from "./components/Provider.svelte";
export const iconsKey = Symbol("context-icons");

export {
    Icon,
    IconsProvider
}

export type TIconProps<T = string> = {
    name: T;
    size?: number;
    viewBox?: string;
}
export type TProviderProps = {
    paths: Record<string, string>;
}