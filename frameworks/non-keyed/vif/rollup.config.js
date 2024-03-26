// Import rollup plugins
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    // Setup input files
    input: "src/main.js",
    // Setup output directory
    output: {
        dir: "dist",
        format: "esm",
    },
    plugins: [
        // resolve imported node modules
        nodeResolve(),
        // minify javascript with terser
        terser(),
    ],
    // preserve all import names
    preserveEntrySignatures: "strict",
};
