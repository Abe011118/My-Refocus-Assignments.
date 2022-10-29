// using Callback
let balance = 0;

function createBankAccount(name){
}

function checkBalance(){
    console.log('Your current balance is $' + balance + " in your account.");
}

function depositAmount(depositamount){
    balance += depositamount;
    console.log('Deposit successful, Your new balance is $'+ balance + " in your account");
}

function withdrawAmount(withdrawalamount){
    if(withdrawalamount > balance)
    {
        console.log("You cannot withdraw an amount greater than your current balance");
    }else{
        balance -= withdrawalamount;
        console.log('Withraw successful, Your new balance is $'+ balance + ' in your account');
    }
}

createBankAccount("ABE", depositAmount(100));
createBankAccount("ABE", withdrawAmount(50));
createBankAccount("ABE", checkBalance());
