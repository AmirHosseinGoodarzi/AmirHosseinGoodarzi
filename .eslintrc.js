import { init } from "@fullstacksjs/eslint-config/init";

export default init({
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  root: true,
  modules: {
    auto: true,
    react: true,
    typescript: {
      parserProject: "./tsconfig.json",
      resolverProject: "./tsconfig.json",
    },
  },
  plugins: ["eslint-plugin-react-compiler"],
  rules: {
    "react-compiler/react-compiler": "error",
    "no-console": "error"
  },
});
