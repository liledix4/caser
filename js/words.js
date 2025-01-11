export function words(text, regex = /[^A-Za-z0-9]/g) {
    return text
        .split(regex)
        .filter(t => t.match(/.+/g));
}