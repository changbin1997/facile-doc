module.exports = {
  title: 'Facile',
  description: '一个简洁的 Typecho 双栏博客主题',
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '帮助文档', link: '/主题简介.md'},
      {text: '主题下载', link: '/下载和安装.md'},
      {text: '作者博客', link: 'https://www.misterma.com/'},
      {text: '留言板', link: 'https://www.misterma.com/msg.html'},
      {text: 'Github', link: 'https://github.com/changbin1997/Facile'}
    ],
    sidebar: [
      '/主题简介.md',
      '/下载和安装.md',
      '/主题设置.md',
      '/代码高亮.md',
      '/文章设置.md',
      '/文章归档.md',
	  '/统计页.md',
	  '/主题更新.md',
	  '/更新日志.md',
	  '/打赏支持.md'
    ]
  }
};