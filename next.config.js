const withCSS = require('@zeit/next-css')


module.exports = withCSS({
    cssModules: true,
        devIndicators: {
            autoPrerender: false,
        },
    
})




