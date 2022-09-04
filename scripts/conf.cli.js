//starfall-cli config
//https://github.com/cenfun/starfall-cli

const os = require('os');
const path = require('path');

module.exports = {

    build: {

        vendors: ['lz-decompress-json'],

        webpackConfig: (conf, Util) => {
            conf.devtool = false;
            conf.mode = 'production';
            return conf;
        },

        afterAll: (option, Util) => {
            const sources = {};
            const templates = {};
            option.jobList.forEach((item) => {
                const entry = `${item.componentPath}/src/${item.entryFile}`;
                sources[item.name] = Util.relativePath(entry);
                templates[item.name] = Util.readFileContentSync(`${item.buildPath}/${item.buildName}.js`);
            });

            const jsonPath = path.resolve(__dirname, '../lib/templates.json');

            Util.writeJSONSync(jsonPath, JSON.stringify(templates, null, 4));

            //generating readme list
            const MG = require('markdown-grid');

            const rows = Object.keys(templates).map((k) => {
                const source = sources[k];
                return [
                    k,
                    Util.BF(templates[k].length),
                    `[${source}](/${source})`
                ];
            });

            const mg = MG({
                columns: ['Template', 'Size', 'Source'],
                rows
            });

            const list = [mg];

            const tempPath = path.resolve(__dirname, 'template/README.md');
            const savePath = path.resolve(__dirname, '../README.md');
            Util.editFile(tempPath, function(content) {
                return Util.replace(content, {
                    placeholder_list: list.join(os.EOL)
                });
            }, savePath);

            return 0;
        }

    }
};
