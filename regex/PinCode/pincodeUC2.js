// Restrict the PIN code from
// taking alphabets or special
// characters at the
// beginning.
// Check for A400088 – this
// should  fail 

const pinCodeRegex = /^[1-9][0-9]{5}$/;

console.log(pinCodeRegex.test("400088")); 
console.log(pinCodeRegex.test("A400088")); 
console.log(pinCodeRegex.test("@400088")); 
console.log(pinCodeRegex.test("40008A")); 
console.log(pinCodeRegex.test("040088"));  