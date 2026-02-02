import nextConfig from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

const config = [
  {
    ignores: [
      "**/dist",
      "**/node_modules",
      "**/.next",
      "**/out-tsc",
      "**/next-env.d.ts",
    ],
  },
  ...nextConfig,
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierConfig,
];

export default config;
