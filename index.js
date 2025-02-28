const wordsData = require("./words.json");

/** logs all the words.
 * @param {string[]} words
*/
function allWords(words){
    console.log(words);
}

/**logs the first ten words.
 * @param {string[]} words
*/
function firstTenWords(words){
    for(let i = 0; i < 10; i++){
        console.log(words[i])
    }
}

/**logs the next 10 words.
 * @param {string[]} words
 * @param {number} index - starting position in the array
*/
function nextTenWords(words, index){
    for(let i = index; i < index + 10; i++){
        console.log(words[i]);
    }
}

/**logs from 0 to x words.
 * @param {string[]} words
 * @param {number} index - ending position of the array
*/
function firstXWords(words, index){
    for(let i = 0; i <= index; i++){
        console.log(words[i]);
    }
}

/**logs from x to y words.
 * @param {string[]} words
 * @param {number} firstIndex - starting index
 * @param {number} lastIndex - ending index
*/
function subsetOfWords(words, firstIndex, lastIndex){
    for(let i = firstIndex; i <= lastIndex; i++){
        console.log(words[i]);
    }
}

/**logs all the words, sorted alphabetically.
 * @param {string[]} words
*/
function sortWords(words){
    sorted = [...words];
    console.log(sorted.sort());
}

/** wordsWithQ()
 *  returns all the words that contain the letter q
 * 
 * @param {string[]} words - array of lowercase words
 * @returns {string[]} - words that contain the letter 'q'
 */
function wordsWithQ(words){
    const qWords = [...words]
    return qWords.filter(word => word.includes("q"))
}

/** findWordsWithLetter()
 * takes an argument `letter` and returns all the words with that matching letter
 * 
 * @param {string[]} words - array of lowercase words
 * @param {string} process.argv[2] - string of a single alphabetical character
 * @returns {string[]} - words that contain the given the letter. returns an empty array if no word is found. 
 */
function findWordsWithLetter(words){
    const wordsWithLetter = [...words]
    return wordsWithLetter.filter(word => word.includes(process.argv[2].toLowerCase()))
}
