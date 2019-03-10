const path = require('path');
module.exports = function override(config, env) {
    
    let Index;
    let loaderList = config.module.rules[2].oneOf;
    loaderList.map((i, index) => {
        var str = '.sass';
        if (str.replace(i.test, '') == "") {
            Index = index;
        }
    })
    loaderList[Index].use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
            sourceMap: false,
            resources: path.resolve(__dirname, './public/scss/variable.scss'),
        },
    });
    config.resolve.alias = {
        '@': path.join(__dirname, '.', 'src')
    }
    return config;
}