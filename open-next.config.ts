// open-next.config.ts for Cloudflare deployment
// Simplified configuration without KV cache

const config = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      // Remove KV cache dependency
      tagCache: "dummy",
      queue: "dummy",
    },
  },

  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
    },
  },

  dangerous: {
    enableCacheInterception: false,
  },
};

export default config;
