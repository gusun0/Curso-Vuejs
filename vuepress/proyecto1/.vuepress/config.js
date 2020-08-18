module.exports = {
  title: 'Hola',
  description: 'Just playing around',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guia', link: '/guia/' },
      { text: 'External', link: 'https://google.com' }
    ],

    sidebar: {
      '/guia/':[
        '',
        'vuepress-guia'
      ]
    }
    
  }
}