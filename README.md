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
|Template|Size|
|--------|----|
|export-default-string|687.0B|
|lz-decompress-json|2.6KB|
|module-exports-string|463.0B|

## Sources
- export-default-string
```
export default '{placeholder_content}';

```
- lz-decompress-json
```
import decompress from 'lz-utils/lib/decompress.js';

const str = decompress('{placeholder_content}');
const json = JSON.parse(str);

export {
    decompress,
    json
};

export default json;

```
- module-exports-string
```
module.exports = '{placeholder_content}';

```