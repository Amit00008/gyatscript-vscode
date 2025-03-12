const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/extension.ts"],
  bundle: true,
  outfile: "dist/extension.js",
  platform: "node",
  sourcemap: true,
  external: ["vscode"]
}).catch(() => process.exit(1));
