// Lets handle optional part
// i.e. xyz in
// abc.xyz@bridgelabz.co.in
// NOTE: make sure only
// following are valid special
// characters _,+,
// -,.

const emailRegex = /^abc([._,+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

console.log(emailRegex.test("abc@bridgelabz.co"));        
console.log(emailRegex.test("abc.xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc_xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc+xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc-xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc,xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc.xyz@bridgelabz.co.in")); 

console.log(emailRegex.test("abc#xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc$xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc!xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc@bridgelabzcom"));        
console.log(emailRegex.test("abc@bridgelabz.co."));       
console.log(emailRegex.test("abc@bridgelabz.coo"));       
console.log(emailRegex.test("abc@bridgelabz"));          
console.log(emailRegex.test("abc@bridgelabz..co"));      
console.log(emailRegex.test("abc@bridgelabz.co..in"));   