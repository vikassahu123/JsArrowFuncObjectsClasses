// Ensure “.” after bridgelabz
// and validate the
// mandatory 3rd part i.e. co

const emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

console.log(emailRegex.test("abc@bridgelabz.co"));        
console.log(emailRegex.test("abc.xyz@bridgelabz.co"));    
console.log(emailRegex.test("abc@bridgelabz.co.in"));     
console.log(emailRegex.test("abc.xyz@bridgelabz.co.in")); 

console.log(emailRegex.test("abc@bridgelabzcom"));        
console.log(emailRegex.test("abc@bridgelabz.co."));       
console.log(emailRegex.test("abc@bridgelabz.coo"));       
console.log(emailRegex.test("abc@bridgelabz"));          
console.log(emailRegex.test("abc@bridgelabz..co"));      
console.log(emailRegex.test("abc@bridgelabz.co..in"));  