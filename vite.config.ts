import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [
        svelte({
            compilerOptions: {
                customElement: true,
            },
        }),
    ],
    build: {
        lib: {
            formats: ["es", "cjs"],
            entry: "src/main.ts",
            name: "cesys",
        },
    },
});
