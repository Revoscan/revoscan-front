export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Revoscan",
  description: "Prévenir pour un avenir meilleur.",
  locales: ["fr", "en"],
  navItems: [
    {
      label: "EXPERTISE",
      href: "/expertise",
    },
    {
      label: "VISION",
      href: "/vision",
    },
    {
      label: "PROTOCOLE",
      href: "/protocole",
    },
    {
      label: "NOUS CONTACTER",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "EXPERTISE",
      href: "/expertise",
    },
    {
      label: "VISION",
      href: "/vision",
    },
    {
      label: "PROTOCOLE",
      href: "/protocole",
    },
    {
      label: "NOUS CONTACTER",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
