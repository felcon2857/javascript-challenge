// Instructions
/** Given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.*/

// function example
function alphabetPosition(text) {
  return text.toLowerCase().split('').filter( c => c >= 'a' & c <= 'z' )
        .map( c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
        .join(' ');
}
console.log(alphabetPosition('The sunset sets at twelve o' clock.'));
