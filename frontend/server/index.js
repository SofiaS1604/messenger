const path = require('path');
const express = require('express');
const webpack = require('webpack');
const history = require('connect-history-api-fallback');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../webpack.config');

const app = express();
const compiler = webpack(webpackConfig);
const DEFAULT_PORT = 3000;

app.use(webpackDevMiddleware(compiler, {
    stats: webpackConfig.stats,
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));
app.use(history());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(DEFAULT_PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.info(`Listen on http://localhost:${DEFAULT_PORT}/`);
    }
});