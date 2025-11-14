// next.config.js
const isStatic = process.env.STATIC_EXPORT === 'true';

module.exports = {
  ...(isStatic ? {} : {
    i18n: {
      defaultLocale: 'zh',
      locales: ['en', 'zh'],
    },
  }),
  // 注意：localePath 不是 Next.js 原生配置项
  // 如果你使用 next-i18next，这个配置应该在单独的配置文件中
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
