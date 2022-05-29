// https://stackoverflow.com/a/67641345
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
  images: {
    domains: ["cdn.discordapp.com", "visage.surgeplay.com", "crafatar.com"],
  },
  async redirects() {
    return [
      {
        source: "/youre-invited",
        destination: "/mc",
        permanent: false,
      },
      {
        source: "/friend-invite",
        destination: "/mc",
        permanent: false,
      },
    ];
  },
};
