/**
 * mostFrequentChar returns the character tha
 * t repeats itself the most in str. 
 * If there isn't one, returns null.
 *
 * For example:
 * mostFrequentChar("zuriel yahav") === "a"
 * mostFrequentChar("ohad kravchick") === null // a, c, k all show up twice
 * mostFrequentChar("dana kravchick") === "a"
 * mostFrequentChar("a b c d e f") === " "
 * mostFrequentChar("") === null
 */

function mostFrequentChar(str) {

	// If str empty tmpChar will return NULL
	var  winnerChar= null, index = 0,
		topRepeat = { charValue: '', charCount: 0}, 
		search = { charValue: '', charCount: 0}, 
		doNotSearchList = [];

	if (str != '') {

		// Loop through all chars in str
		for (var i = 0; i < str.length; i++) {

			// The char we are now working on
			search.charValue = str.charAt(i); 
			search.charCount = 1; 

			// We will count only the char
			if (doNotSearchList.indexOf(search.charValue, 0) === -1) {

				// Add search char to doNotSearchList 
				// So we do not look for it next time
				doNotSearchList.push(search.charValue);

				index = 1;
				index = str.indexOf(search.charValue, i + index);

				while (index !== -1) {

					search.charCount += 1; 
					index = str.indexOf(search.charValue, index + 1);
				}

				// Check if we have a winner, top repeat char 
				// Only if we do have a winner will update topRepeat
				if (search.charCount > topRepeat.charCount) {

					topRepeat.charValue = search.charValue;
					topRepeat.charCount = search.charCount;
					winnerChar = topRepeat.charValue;

				} else if (topRepeat.charCount === search.charCount) {
					//  If top repeat char same to current search char count, so will set winnerChar to null
					winnerChar = null;

				}
			}
		}
	}
	return  winnerChar;

}

//mostFrequentChar("zuriel yahav");
module.exports = mostFrequentChar; 
