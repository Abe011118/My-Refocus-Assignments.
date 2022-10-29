// using Closures
function createBankAccount(name){
    let balance = 0;

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

    return {//return result
        depositAmount,
        withdrawAmount,
        checkBalance
    }
}

const myBank = createBankAccount("ABE");
myBank.depositAmount(100);
myBank.withdrawAmount(50);
myBank.checkBalance();
