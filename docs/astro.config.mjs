import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "EchoProxy",
      logo: {
        src: "./src/assets/favicon.svg",
      },
      social: {
        github: "https://github.com/echolabx/echoproxy",
      },
      // editLink: {
      //   baseUrl: 'https://github.com/echolabx/echoproxy/tree/main/docs',
      // },
      sidebar: [
        {
          label: "Start Here",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", link: "/start", },
          ],
        },
        {
          label: "Debug on Devices",
          items: [
            { label: "MacOS", link: "/device/macos", },
            { label: "Windows", link: "/device/windows", },
            { label: "iOS", link: "/device/ios", },
            { label: "Android", link: "/device/android", },
          ],
        },
        {
          label: "Map Mock",
          items: [
            { label: "Map Mock", link: "/mapmock", },
            { label: "EchoScript", link: "/mapmock/echoscript", },
          ],
        },
        {
          label: "EchoSend",
          items: [
            { label: "EchoSend", link: "/echosend", },
          ],
        },
        {
          label: "Deep in EchoScript",
          items: [
            { label: "Language", link: "/echoscript", },
          ],
        },
        // {
        // 	label: 'Reference',
        // 	autogenerate: { directory: 'reference' },
        // },
      ],
      customCss: ["./src/styles/tailwind.css", "./src/styles/custom.css"],
      components: {
        // Override the default `SocialIcons` component.
        SiteTitle: "./src/components/MySiteTitle.astro",
      },
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
  vite: {
    plugins: [Icons({ compiler: "astro" })],
  },
});
