/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Škola vaření FCMG",
  tagline:
    "Recepty z legendárních škol vaření U Kastelána pod velením Michala Götha",
  url: "https://skolavareni.fcmg.cz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "michalsanger", // Usually your GitHub org/user name.
  projectName: "skolavareni.fcmg.cz", // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: "Q6MR4LN5JG",
      apiKey: "1e062e279835e9ecf581f135c7d90b49",
      indexName: "skolavareni-fcmg",
      placeholder: "Hledat v receptech",
    },
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "Škola vaření",
      logo: {
        alt: "FCMG logo",
        src: "img/fcmg-logo.png",
      },
      items: [
        {
          to: "recepty/",
          activeBasePath: "recepty",
          label: "Recepty",
          position: "left",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `© ${new Date().getFullYear()} FCMG.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "recepty",
          routeBasePath: "recepty",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [["@docusaurus/plugin-ideal-image", { sizes: [1024] }]],
};
