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
    //umd name
    name: 'my-export-default',
    //runtime template name
    template: 'export-default-string',
    //replacement content
    content: 'test-string: export-default-string',
    //output file path
    output: './scripts/dist/my-export-default.js'
});

```
see [scripts/test.js](/scripts/test.js) and [scripts/index.html](/scripts/index.html)

## Templates
|Template|Size|Source|
|:-------|---:|:-----|
|export-default-string|687.0B|[packages/export-default-string/src/index.js](/packages/export-default-string/src/index.js)|
|lz-decompress-json|2.6KB|[packages/lz-decompress-json/src/index.js](/packages/lz-decompress-json/src/index.js)|
|lz-decompress-svg|3.4KB|[packages/lz-decompress-svg/src/index.js](/packages/lz-decompress-svg/src/index.js)|
|module-exports-string|463.0B|[packages/module-exports-string/src/index.js](/packages/module-exports-string/src/index.js)|