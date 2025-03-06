// Make sure 400 088 is also
// valid along with 400088 

const pinCodeRegex = /^[1-9][0-9]{2} ?[0-9]{3}$/;

console.log(pinCodeRegex.test("400088"));   
console.log(pinCodeRegex.test("400 088"));  
console.log(pinCodeRegex.test("A400088"));  
console.log(pinCodeRegex.test("400088B"));  
console.log(pinCodeRegex.test("400@088"));  
console.log(pinCodeRegex.test("040088"));    
console.log(pinCodeRegex.test("4000 88"));   
console.log(pinCodeRegex.test("400  088"));  