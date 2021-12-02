import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import multiInput from "rollup-plugin-multi-input";

import pkg from "./package.json";

export default {
  input: ["src/*.ts"],
  output: {
    dir: pkg.module,
    format: "esm",
  },
  plugins: [commonjs(), typescript(), resolve(), multiInput()],
};
