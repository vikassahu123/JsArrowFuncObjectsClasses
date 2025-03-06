// Finally lets close the
// expression with
// supporting optional parts.
// Note: Top Level Domains
// (TLD) in the last part is the
// optional country code and

// its 2 character only

const emailRegex = /^abc([._,+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

console.log(emailRegex.test("abc@bridgelabz.co"));        
console.log(emailRegex.test("abc.xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc_xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc+xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc-xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc,xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc.xyz@bridgelabz.co.in")); 
console.log(emailRegex.test("abc@bridgelabz.co.us"));     

console.log(emailRegex.test("abc@bridgelabzcom"));        
console.log(emailRegex.test("abc@bridgelabz.co."));       
console.log(emailRegex.test("abc@bridgelabz.coo"));       
console.log(emailRegex.test("abc@bridgelabz"));          
console.log(emailRegex.test("abc@bridgelabz..co"));      
console.log(emailRegex.test("abc@bridgelabz.co..in"));   
console.log(emailRegex.test("abc@bridgelabz.co.abc"));    
console.log(emailRegex.test("abc@bridgelabz.co.u"));      
console.log(emailRegex.test("abc@bridgelabz.co.usa"));    
console.log(emailRegex.test("abc#xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc$xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc!xyz@bridgelabz.co"));    