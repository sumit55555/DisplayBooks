const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/b/VOII',
        createProxyMiddleware({
            target: 'https://www.jsonkeeper.com',
            changeOrigin: true,
        })
    );
};
