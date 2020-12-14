module.exports = {
    title: 'Daniel Prado',
    theme: '@vuepress/theme-blog',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        dateFormat: 'DD/MM/YYYY',
        nav: [
            {text: 'Home', link:'/'},
        ],
        footer: {
            contact: [
                {type: 'github', link: 'https://github.com/dfeprado'}
            ],
            copyright: [
                {text:' Copyright © 2020-atualidade'}
            ]
        }
    }
}