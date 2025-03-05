const Contact = require("../src/Contact");
const AddressBook = require("../src/AddressBook");

let addressBook = new AddressBook();

console.log("\n Adding Valid Contacts to Address Book:");
try {
    let contact1 = new Contact("Vikas", "Sahu", "Indrapuri", "Bhopal", "Madhya Pradesh", "123456", "9876543210", "sonu.sharma@example.com");
    addressBook.addContact(contact1);

    let contact2 = new Contact("Vikas", "Sahu", "New Colony", "Patna", "Bihar", "654321", "8765432109", "saurabh.sharma@example.com");
    addressBook.addContact(contact2);

    console.log("\nAll Contacts:"); 
    console.log(addressBook.getAllContacts());
}  catch (error) {
    console.error("Error:", error.message);
} 


console.log("\n Editing Contact:");
try {
    let updatedContact = new Contact("Vikas", "Sahu", "New Indrapuri", "Bhopal", "Madhya Pradesh", "123456", "9876543210", "sonu.new@example.com");
    addressBook.editContact("Vikas", "Sahu", updatedContact);

    console.log("\nContacts After Editing:");
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}


console.log("\nTesting Editing Non-Existent Contact:");
try {
    let updatedContact = new Contact("Random", "Person", "Street", "City", "State", "123456", "9876543210", "random@example.com");
    addressBook.editContact("Random", "Person", updatedContact);
} catch (error) {
    console.error("Expected Error:", error.message);
}