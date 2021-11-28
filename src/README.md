# Svelte Context Icons

## Installation

``` js
npm i @ayalab/svelte-context-icons 
```

## How to use

* Create icons paths config
  * You may use library that provides icons paths, for example @mdi/js

    ``` js
        ./icons-config.ts

        import {mdiPlus, mdiMinus} from "@mdi/js"
        const paths = {
            plus:mdiPlus,
            minus:mdiMinus
        }
    ```

  * Or you may add your own icons paths

    ``` js
        ./icons-config.ts

        const paths = {
           plus: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
        }
    ```

* Wrap your app with IconsProvider and pass paths config to it

    ``` js
        import {IconsProvider} from "@ayalab/svelte-context-icons"

        import {paths} from "./icons-config.ts"

        <IconsProvider {paths}>
            <App/>
        </IconsProvider>
    ```

* Now in any part of your app you can use icon component

    ``` js
        import {Icon} from "@ayalab/svelte-context-icons"

        <div>
            <Icon name="plus"/>
        </div>
    ```

* To add typescript support you may use that workaround
  * Create d.ts with following content

    ``` ts
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
    ```
