import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'EchoProxy',
      logo: {
        src: './src/assets/favicon.svg',
      },
			social: {
				github: 'https://github.com/echolabx/echoproxy',
			},
      // editLink: {
      //   baseUrl: 'https://github.com/echolabx/echoproxy/tree/main/docs',
      // },
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        // Override the default `SocialIcons` component.
        SiteTitle: './src/components/MySiteTitle.astro',
      },
		}),
	],
});
