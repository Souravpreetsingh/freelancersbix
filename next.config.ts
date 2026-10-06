import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * A stray `package-lock.json` exists in the parent user directory, which
   * makes Next infer the wrong workspace root on this machine. Pin the
   * tracing root to this project instead.
   */
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
