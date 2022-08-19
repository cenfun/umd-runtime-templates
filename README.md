# umd-runtime-templates
> Webpack UMD Runtime Templates

## Install
```sh
npm i umd-runtime-templates
```

## Usage
```js
const URT = require('umd-runtime-templates');

URT({
    template: 'export-default-string',
    name: 'my-export-default',
    content: 'test-string: export-default-string',
    output: './scripts/dist/my-export-default.js'
});

URT({
    template: 'module-exports-string',
    name: 'my-module-exports',
    content: 'test-string: module-exports-string',
    output: './scripts/dist/my-module-exports.js'
});
```