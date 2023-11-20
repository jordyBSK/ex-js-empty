import { isString } from "util";

/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} true if n is bigger than 2
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
    if (!isString(needle) || !isString(haystack) || !isString(newWord)) {
        throw new Error('not a string!');
    }

    const regex = new RegExp(needle, 'gi');

    return haystack.replace(regex, (match) => {

        const needleLetters = match.split('');
        let newWordLetters = '';

        for (let i = 0; i < needleLetters.length; i++) {
            if (i >= newWord.length) {
                return newWordLetters
            } else if (needleLetters[i] === needleLetters[i].toUpperCase()) {
                newWordLetters += newWord[i].toUpperCase()
            } else {
                newWordLetters += newWord[i].toLowerCase()
            }
        }
        return newWordLetters;
    });
}



