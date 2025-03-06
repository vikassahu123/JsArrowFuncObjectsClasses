// Restrict the PIN code from
// taking alphabets or special
// characters at the End.
// Check for 400088B – this
// should fail


const pinCodeRegex = /^[1-9][0-9]{5}$/;

console.log(pinCodeRegex.test("400088"));
console.log(pinCodeRegex.test("A400088")); 
console.log(pinCodeRegex.test("400088B")); 
console.log(pinCodeRegex.test("400088@")); 
console.log(pinCodeRegex.test("040088")); 