//starfall-cli config
//https://github.com/cenfun/starfall-cli

const path = require('path');

module.exports = {

    build: {

        webpackConfig: (conf, Util) => {
            conf.devtool = false;
            conf.mode = 'production';
            return conf;
        },

        afterAll: (option, Util) => {
            const templates = {};
            option.jobList.forEach((item) => {
                templates[item.name] = Util.readFileContentSync(`${item.buildPath}/${item.buildName}.js`);
            });

            const jsonPath = path.resolve(__dirname, '../lib/templates.json');

            Util.writeJSONSync(jsonPath, JSON.stringify(templates, null, 4));

            return 0;
        }

    }
};
