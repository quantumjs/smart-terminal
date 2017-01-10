module.exports = {
  plugins: [
    require('postcss-smart-import')({/* ...options */}),
    require('postcss-css-variables')({/* ...options */}),
    require('postcss-nested')({/* ...options */}),
    require('autoprefixer')({ "browsers": "> 5%"})
  ]
}
