import svelte from "rollup-plugin-svelte";
import preprocess from "svelte-preprocess";

const production = process.env.NODE_ENV === "production";

export default {
  plugins: [
    svelte({
      hot: !production,
      emitCss: production,
      preprocess: preprocess({
        typescript: true,
        postcss: true,
      }),
    }),
  ],
  server: {
    host: "localhost",
    port: 3000,
  },
};
