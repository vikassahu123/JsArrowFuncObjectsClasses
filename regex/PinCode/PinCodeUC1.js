// The Postal Index Number
// (PIN) or PIN Code is a 6
// digit code of Post Office
// numbering used
// by India Post.
// Create a regex pattern to
// validate PIN CODE 400088 

const pinCodeRegex = /^[1-9][0-9]{5}$/;

const testPin = "400088";
console.log(pinCodeRegex.test(testPin)); 