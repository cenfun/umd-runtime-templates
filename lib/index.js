
const fs = require('fs');
const path = require('path');
const compress = require('lz-utils/deflate-sync');
const templates = require('./templates.json');

const URT = (_options) => {

    const options = {
        // umd name
        name: '',
        // runtime template name
        template: 'export-default-string',
        // replacement content
        content: '',
        // output file path
        output: '',
        ... _options
    };

    let content = templates[options.template];
    if (!content) {
        console.log(`ERROR: Not found template: ${options.template}`);
        return;
    }

    if (!options.name || !options.content) {
        console.log('ERROR: Invalid name or content');
        return;
    }

    content = content.split(options.template).join(options.name);
    content = content.split('{placeholder_content}').join(options.content);

    if (options.output) {
        const filePath = path.resolve(options.output);
        const p = path.dirname(filePath);
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p, {
                recursive: true
            });
        }
        fs.writeFileSync(filePath, content);
    }

    return content;
};

URT.compress = compress;

module.exports = URT;
