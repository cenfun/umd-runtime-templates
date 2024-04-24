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


URT({
    template: 'lz-decompress-json',
    name: 'my-lz-decompress-json',
    content: URT.compress(JSON.stringify({
        jsonKey: 'json value'
    })),
    output: './scripts/dist/my-lz-decompress-json.js'
});


URT({
    template: 'lz-decompress-svg',
    name: 'my-lz-decompress-svg',
    content: URT.compress(JSON.stringify({
        id: 'myId',
        icons: [{
            name: 'myIcon'
        }]
    })),
    output: './scripts/dist/my-lz-decompress-svg.js'
});

console.log('=========================================================');
console.log('please open scripts/index.html to check results');
