// Ensure @ and validate the
// mandatory 2nd part i.e.
// bridgelabz

const emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

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