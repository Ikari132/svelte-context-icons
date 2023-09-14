declare module "@ayalab/svelte-context-icons" {
  type AType = keyof typeof import("./icons-config").paths;
  type BType = keyof typeof import("./icons-config").anotherPaths;
  export type TIconName = AType | BType;
}