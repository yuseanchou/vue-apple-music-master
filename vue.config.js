module.exports = {
	publicPath: './',
	lintOnSave:false,
  // 关闭eslint
  devServer: {
    proxy: {
      '/ajax': {
        target:process.env.VUE_APP_URL,
        ws: true,
        changeOrigin:true
      }
    }
  },
}
