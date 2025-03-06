// Validate Email address with a
// regex. The email consists of
// minimum 3 and optional 2 more
// parts with mandatory @ and .
// abc.xyz@bridgelabz.co.in
// Here abc, bridgelabz and co are
// mandatory and the remaining 2
// are optional
// To begin with lets validate the
// mandatory part and start with abc

const emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

// test cases
console.log(emailRegex.test("abc@bridgelabz.co"));        
console.log(emailRegex.test("abc.xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc@bridgelabz.co.in"));     
console.log(emailRegex.test("abc.xyz@bridgelabz.co.in")); 

console.log(emailRegex.test("xyz@bridgelabz.co"));        
console.log(emailRegex.test("abc@xyz.co"));            
console.log(emailRegex.test("abc@bridgelabz.com"));     
console.log(emailRegex.test("abc@bridgelabz"));        
console.log(emailRegex.test("abc.xyz@bridgelabz.c"));   
console.log(emailRegex.test("abc@bridgelabz.co.i"));    
console.log(emailRegex.test("abc@bridgelabz.co..in")); 