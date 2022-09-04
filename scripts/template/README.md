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
{placeholder_list}