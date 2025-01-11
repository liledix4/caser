export function returnDelimiter(condition, not, underscore, hyphen) {
    if (condition !== not) {
        if (condition === underscore)
            return '_';
        else if (condition === hyphen)
            return '-';
    }
    return '';
}