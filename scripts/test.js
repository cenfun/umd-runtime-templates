const URT = require('../lib');

URT({
    template: 'export-default-string',
    name: 'my-export-default-string',
    content: 'test-string: export-default-string',
    output: './scripts/dist/my-export-default-string.js'
});

URT({
    template: 'module-exports-string',
    name: 'my-module-exports-string',
    content: 'test-string: module-exports-string',
    output: './scripts/dist/my-module-exports-string.js'
});


const compress = require('lz-utils/lib/compress.js');
URT({
    template: 'lz-decompress-json',
    name: 'my-lz-decompress-json',
    content: compress(JSON.stringify({
        jsonKey: 'json value'
    })),
    output: './scripts/dist/my-lz-decompress-json.js'
});
