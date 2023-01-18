# Svelte Context Icons

## Installation

``` js
npm i @ayalab/svelte-context-icons 
```

## How to use

* Create icons paths config
  * You may use a library that provides svg icons paths, for example @mdi/js

    ``` js
        ./icons-config.js

        import { mdiPlus, mdiMinus } from "@mdi/js";

        const paths = {
            plus:mdiPlus,
            minus:mdiMinus
        };
    ```

  * Or you may add your svg icons paths

    ``` js
        ./icons-config.js

        const paths = {
           plus: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
        };
    ```

* Wrap your app with IconsProvider and add paths config to its props

    ``` js
        import { IconsProvider } from "@ayalab/svelte-context-icons";

        import { paths } from "./icons-config.js";

        <IconsProvider {paths}>
            <App/>
        </IconsProvider>
    ```

* Now in any part of your app you can use the icon component

    ``` js
        import { Icon } from "@ayalab/svelte-context-icons";

        <div>
            <Icon name="plus"/>
        </div>
    ```

* To add typescript support, you may use that workaround
  * Create .ts file with paths object like in previous example
  * In your types folder, create .d.ts file with the following content

    ``` ts
        declare module "@ayalab/svelte-context-icons" {
            import type { SvelteComponentTyped } from 'svelte';

            // Set the path to your icons config here
            declare type TPaths = keyof typeof import("./icons-config").paths;

            export type TIconName = TPaths;

            declare type TIconProps = import("@ayalab/svelte-context-icons/index").TIconProps<TPaths>;
            declare type TProviderProps = import("@ayalab/svelte-context-icons/index").TIconsProviderProps<TPaths>;

            export class Icon extends SvelteComponentTyped<TIconProps, {}, {}> {}
            export class IconsProvider extends SvelteComponentTyped<TProviderProps, {}, {}>{}
        }
    ```
