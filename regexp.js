require('colors');
var re1 = new RegExp("abc");
var re2 = /abc/;


console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false

console.log(/[0123456789]/.test("in 1992"));
// → true


// Within square brackets, a dash (-) between two characters can be used to indicate a range of characters,
// where the ordering is determined by the character’s Unicode number. 
// Characters 0 to 9 sit right next to each other in this ordering (codes 48 to 57), so [0-9] covers all of them and matches any digit.

console.log(/[0-9]/.test("in 1992"));
// → true


console.log("\\d	Any digit character");
console.log("\\w	An alphanumeric character (“word character”)"); 
console.log("\\s	Any whitespace character (space, tab, newline, and similar)");
console.log("\\D	A character that is not a digit");
console.log("\\W	A nonalphanumeric character");
console.log("\\S	A nonwhitespace character");
console.log("\.	Any character except for newline");

//... + " MATCHES \"...\" ? " + 

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime + " MATCHES \"30-01-2003 15:20\" ? " + dateTime.test("30-01-2003 15:20"));
// → true
console.log((dateTime + " MATCHES \"30-jan-2003 15:20\" ? " + dateTime.test("30-jan-2003 15:20")).red);
// → false

// These backslash codes can also be used inside square brackets. 
// For example, [\d.] means any digit or a period character. 
// But note that the period itself, when used between square brackets, 
// loses its special meaning. The same goes for other special characters, such as +.


// To invert a set of characters—that is, to express that you want to match any character except 
// the ones in the set—you can write a caret (^) character after the opening bracket.

var notBinary = /[^01]/;
console.log((notBinary + " MATCHES \"1100100010100110\" ? " + notBinary.test("1100100010100110")).red);
// → false
console.log(notBinary + " MATCHES \"1100100010200110\" ? " + notBinary.test("1100100010200110"));
// → true

console.log(/'\d+'/ + " (one or more) MATCHES \"'123'\" ? " + /'\d+'/.test("'123'"));
// → true
console.log((/'\d+'/ + " MATCHES \"''\" ? " + /'\d+'/.test("''")).red);
// → false
console.log(/'\d*'/ + " (zero or more)  MATCHES \"'123'\" ? " + /'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/ + " (zero or more)  MATCHES \"''\" ? " + /'\d*'/.test("''"));
// → true