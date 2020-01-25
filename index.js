require("@babel/polyfill");
require('@babel/register')({
    "presets": [
      "@babel/env","@babel/typescript"
    ],
    "extensions": ['.js', '.jsx', '.ts', '.tsx'],
    "plugins": ["inferno"]
});
require('./server/koa');