const Contact = require("../src/Contact.js");
const AddressBook = require("../src/AddressBook.js");

let addressBook = new AddressBook();

console.log("\nAdding Valid Contacts to Address Book:");
try {
    let contact1 = new Contact("Vikas", "Sahu", "Indrapuri", "Bhopal", "Madhya Pradesh", "123456", "8365383622", "vikas.sahu@345.com");
    addressBook.addContact(contact1);

    let contact2 = new Contact("Saru", "Sharma", "New Colony", "Patna", "Bihar", "654321", "8785432109", "sahu.vikky@ssdfj.com");
    addressBook.addContact(contact2);

    console.log("\nAll Contacts:");
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}


console.log("\nTesting Invalid Contact (Should Fail):");
try {
    let invalidContact = new Contact("Jo", "S", "St", "NY", "US", "12345", "98765", "invalid@");
    addressBook.addContact(invalidContact);
} catch (error) {
    console.error("Expected Error:", error.message);
}