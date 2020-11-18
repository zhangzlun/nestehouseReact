/* eslint-disable*/
const {resolve} = require('path');

const nextConfig = {
    webpack: (config, { isServer }) => {
        // src ディレクトリをエイリアスのルートに設定

        config.resolve.alias['~'] = resolve(__dirname, 'src');
        return config;
    },
};

module.exports = nextConfig;
