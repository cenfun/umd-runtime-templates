import decompress from 'lz-utils/lib/decompress.js';

const str = decompress('{placeholder_content}');
const json = JSON.parse(str);

export {
    decompress,
    json
};

export default json;
