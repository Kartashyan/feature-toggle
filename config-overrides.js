const path = require('path');

module.exports = {
    paths: function (paths, env) {
        paths.appPath = path.resolve(__dirname, 'app');
        // paths.publicUrlOrPath = path.resolve(__dirname, 'app');
        paths.appPublic = path.resolve(__dirname, 'app/public');
        paths.appHtml = path.resolve(__dirname, 'app/public/index.html');
        paths.appIndexJs = path.resolve(__dirname, 'app/src/index.js');
        paths.appSrc = path.resolve(__dirname, 'app/src');
        paths.testsSetup = path.resolve(__dirname, 'app/src/setupTests.js');
        paths.appBuild = path.resolve(__dirname, 'app/build');
        console.log(paths);
        return paths;
    },
}