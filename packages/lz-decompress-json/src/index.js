import decompress from 'lz-utils/lib/decompress.js';

const str = decompress('{placeholder_content}');
const metadata = JSON.parse(str);

export {
    decompress,
    metadata
};

export default metadata;
