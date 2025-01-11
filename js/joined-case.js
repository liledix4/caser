import { returnDelimiter } from "./return-delimiter.js";
import { words } from "./words.js";


export function joinedCase(text, type = 'pascal') {
    let result = '';
    const split = words(text);
    const lastItem = split.length - 1;

    switch (type) {
        case 'camel':
            for (let i = 0; i < split.length; i++) {
                let add = split[i];
                if (i !== 0)
                    add = add.charAt(0).toUpperCase() + add.substring(1);
                else
                    add = add.charAt(0).toLowerCase() + add.substring(1);
                result += add;
            }
            break;
        case 'flat':
        case 'kebab':
        case 'snake':
            for (let i = 0; i < split.length; i++) {
                result += split[i].toLowerCase();
                if (i !== lastItem)
                    result += returnDelimiter(type, 'flat', 'snake', 'kebab');
            }
            break;
        case 'pascal':
        case 'titlesnake':
        case 'httpheader':
            for (let i = 0; i < split.length; i++) {
                result += split[i].charAt(0).toUpperCase() + split[i].substring(1);
                if (i !== lastItem)
                    result += returnDelimiter(type, 'pascal', 'titlesnake', 'httpheader');
            }
            break;
        case 'scream':
        case 'macro':
        case 'train':
            for (let i = 0; i < split.length; i++) {
                result += split[i].toUpperCase();
                if (i !== lastItem)
                    result += returnDelimiter(type, 'scream', 'macro', 'train');
            }
            break;
    }

    return result;
}