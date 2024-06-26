import decompress from 'lz-utils/inflate-sync';

const initSvg = function(icon, size = '100%') {

    if (icon.svg) {
        return;
    }

    const list = ['<svg'];
    if (icon.viewBox) {
        list.push(` viewBox="${icon.viewBox}"`);
        delete icon.viewBox;
    }

    list.push(` width="${size}" height="${size}"`);
    if (icon.preserveAspectRatio) {
        list.push(` preserveAspectRatio="${icon.preserveAspectRatio}"`);
        delete icon.preserveAspectRatio;
    }
    list.push(' pointer-events="none" xmlns="http://www.w3.org/2000/svg">');

    list.push(icon.content);
    delete icon.content;

    list.push('</svg>');

    const svg = list.join('');
    const prefixPlaceholder = '{prefix}';
    const hasPrefix = svg.indexOf(prefixPlaceholder) !== -1;
    let n = 0;
    if (hasPrefix) {
        // dynamic prefix
        Object.defineProperty(icon, 'svg', {
            get: function() {
                n += 1;
                const uid = `${icon.id}-${n}`;
                return svg.split(prefixPlaceholder).join(uid);
            }
        });
    } else {
        icon.svg = svg;
    }

};

const str = decompress('{placeholder_content}');
const metadata = JSON.parse(str);

// init id and content
const icons = metadata.icons;
if (Array.isArray(icons)) {
    icons.forEach((icon) => {
        icon.id = `${metadata.id}-${icon.name}`;

        const content = icon.content;
        if (typeof content === 'number') {
            // duplicate content
            icon.content = icons[content].content;
        }
    });
}

export {
    metadata,
    decompress,
    initSvg
};

export default metadata;

