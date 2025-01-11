import { joinedCase } from "./js/joined-case.js";


export function caser(text, toCaseType = 'unchanged', fromCaseType = 'original', allowedSymbols) {
    console.log({
        text: text,
        toCaseType: toCaseType,
        fromCaseType: fromCaseType,
        allowedSymbols: allowedSymbols,
    });
    switch (toCaseType) {
        case 'unchanged':
            return text;
        case 'allcaps':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'camel':
        case 'flat':
        case 'httpheader':
        case 'kebab':
        case 'macro':
        case 'pascal':
        case 'scream':
        case 'snake':
        case 'titlesnake':
        case 'train':
            return joinedCase(text, toCaseType);
    }
}