export let queryStrings = getQueryStrings();


export function getQueryStrings() {
    let object = {};

    const question = location.href.match(/(?<=\?).*$/);
    if (!question) return;

    const amp = question[0].split('&');

    amp.forEach(arr => {
        const arr2 = arr.split('=');
        const key = arr2[0];
        const value = arr2[1];

        if (value.match(/^\d+$/))
            object[key] = parseInt(value);
        else if (value.match(/^[\d\.]+$/))
            object[key] = parseFloat(value);
        else switch (value) {
            case 'true':
                object[key] = true;
                break;
            case 'false':
                object[key] = false;
                break;
            case 'null':
                object[key] = null;
                break;
            case 'undefined':
                object[key] = undefined;
                break;
            case 'NaN':
                object[key] = NaN;
                break;
            default:
                object[key] = value;
        }
    });

    return object;
}