import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import postcssJitProps from "postcss-jit-props";
import OpenProps from "open-props";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync("./localhost-key.pem"),
      cert: fs.readFileSync("./localhost.pem"),
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssJitProps(OpenProps)],
    },
  },
});
