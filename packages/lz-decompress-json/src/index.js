import decompress from 'lz-utils/inflate-sync';

const str = decompress('{placeholder_content}');
const metadata = JSON.parse(str);

export {
    decompress,
    metadata
};

export default metadata;
