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
                sources[item.name] = Util.readFileContentSync(`${item.componentPath}/src/${item.entryFile}`);
                templates[item.name] = Util.readFileContentSync(`${item.buildPath}/${item.buildName}.js`);
            });

            const jsonPath = path.resolve(__dirname, '../lib/templates.json');

            Util.writeJSONSync(jsonPath, JSON.stringify(templates, null, 4));

            //generating readme list
            const MG = require('markdown-grid');

            const rows = Object.keys(templates).map((k) => {
                return [
                    k,
                    Util.BF(templates[k].length)
                ];
            });

            const mg = MG({
                columns: ['Template', 'Size'],
                rows
            });

            const list = [mg];

            list.push('');
            list.push('## Sources');

            Object.keys(templates).forEach((k) => {
                list.push(`- ${k}`);
                list.push('```');
                list.push(sources[k]);
                list.push('```');
            });

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
