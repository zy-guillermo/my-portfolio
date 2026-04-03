import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages can only host static HTML/CSS/JS (no serverless API routes).
  // This makes `next build` produce a static `out/` folder.
  output: "export",
  // When deploying to `https://<user>.github.io/<repo>/`, this ensures routing
  // and Next-generated paths use the correct base URL.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  trailingSlash: true,
};

export default nextConfig;
