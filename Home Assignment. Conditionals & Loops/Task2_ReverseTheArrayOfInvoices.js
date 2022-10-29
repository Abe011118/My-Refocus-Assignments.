// Use array methods to create two recursive functions:
// insertToBottom, which adds invoices at the bottom of the list
// reverseStack, which reverses the order of the invoices

// Hint
// The result of calling the first function should look like this string:
// Invoice 008 Invoice 007 Invoice 006 Invoice 005 Invoice 004 Invoice 003
// Invoice 002 Invoice 001

// Hint
// The result of calling the second function should look like this string:
// Invoice 008 Invoice 007 Invoice 006 Invoice 005 Invoice 004 Invoice 003
// Invoice 002 Invoice 001

let InvoiceList = [
       "Invoice 008",
       "Invoice 007",
       "Invoice 006",
       "Invoice 005",
];

function insertToBottom(data){
       const addedData = InvoiceList.push(data);
       return addedData;
}

function reverseList(){
       const reverseData = InvoiceList.reverse();
       return reverseData;
}

InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");

console.log(InvoiceList.join(" "));
reverseList();
console.log(InvoiceList.join(" "));


insertToBottom("Invoice 009");
console.log(InvoiceList.join(" "));
reverseList();
console.log(InvoiceList.join(" "));