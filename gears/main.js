import { caser } from "../caser.js";
import { queryStrings } from "../js/query-strings.js";


const selectorInputText = document.getElementById('input-text');
const selectorFromCaseType = document.getElementById('from-case');
const selectorToCaseType = document.getElementById('to-case');
const selectorAllowedSymbols = document.getElementById('symbols');
const selectorStrictProcessing = document.getElementById('strict');
const selectorResult = document.getElementById('result');


function doIt() {
    selectorResult.innerText = caser(
        selectorInputText.value,
        selectorToCaseType.value,
        selectorFromCaseType.value,
        selectorAllowedSymbols.value,
        selectorStrictProcessing.value
    );
}


selectorInputText.addEventListener('input', doIt);
selectorAllowedSymbols.addEventListener('input', doIt);
selectorFromCaseType.addEventListener('change', doIt);
selectorToCaseType.addEventListener('change', doIt);
selectorStrictProcessing.addEventListener('change', doIt);


if (queryStrings) {
    if (queryStrings.text)
        selectorInputText.value = queryStrings.text;
    if (queryStrings.tocase)
        selectorToCaseType.value = queryStrings.tocase;
    if (queryStrings.fromcase)
        selectorFromCaseType.value = queryStrings.fromcase;
    if (queryStrings.allowed)
        selectorAllowedSymbols.value = queryStrings.allowed;
    doIt();
}