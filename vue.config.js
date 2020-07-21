module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_main.scss";`,
      }
    }
  },
  devServer:{
    host: 'localhost'
  }
};