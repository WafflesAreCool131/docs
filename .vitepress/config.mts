import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IceCream Docs",
  description: "The Docs For Everything IceCreamMC",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Website', link: 'https://icecreammc.github.io/' }
    ],

    sidebar: [
      {
        text: 'Social',
        items: [
          { text: 'X (I mean Twitter)', link: '' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/IceCreamMC' }
    ]
  }
})
