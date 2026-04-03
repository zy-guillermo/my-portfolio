import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages needs a fully static export. We enable it only for that build.
  output: process.env.NEXT_PUBLIC_PAGES_EXPORT === "true" ? "export" : undefined,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  trailingSlash: true,
};

export default nextConfig;
