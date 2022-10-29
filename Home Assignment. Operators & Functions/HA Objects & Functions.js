// Task 1. Create a bank account
bankAccount = {
       "bankAccountID" : "abcd123",
       "accountNumber" : "ph0123456789",
       "credentials" : [{'userName': "jDelaCruz",'Password': "ph@123", 'Pin' : 1234}],
       "balance" : 10000000,
       "createdAt" : "10/16/2022"
   }
   
// Task 2. Create a user account
userAccount = {
       "bankAccount" : "11112222",
       "debitCard" : "33334444",
       "firstName" : "Juan",
       "lastName" : "Dela Cruz",
       "birthDate" : "06/12/2022",
       "validID" : [{'Passport': "PH987654321",
                     'Drivers License': "C09-123456789"}],
       "address" : "Tondo, Manila"
}
   
// Task 3. Add functionality to the system. “getBankAccountDetails”, which checks if the username and password are correct and shows the bank account details
function checkUserPassword(username, password){
       function get_User(){// check user
              for (user of bankAccount.credentials) {
                     return user.userName;
              }
       }

       function get_Password(){// check password
              for (pass of bankAccount.credentials) {
                     return pass.Password;
              }
       }

       function compareUserPassword(){// compare user and password
              if(get_User() == username){
                     if(get_Password() == password){
                            return true;
                     }else{
                            console.log("Wrong password!!!");
                     }
              }else{
                     console.log("Invalid User!!!");
              }
       }
       return compareUserPassword();
}

function getBankAccountDetails(userPasswordConfirm){
       if(userPasswordConfirm == true){
              showBankDetails();
       }

       function showBankDetails(){
              console.log("");
              console.log('Welcome ' + userAccount.firstName + ", " + userAccount.lastName);
              console.log('BANK ACCOUNT   : ' + userAccount.bankAccount);
              console.log('DEBIT CARD     : ' + userAccount.debitCard);
              console.log('FIRST NAME     : ' + userAccount.firstName);
              console.log('LAST NAME      : ' + userAccount.lastName);
              console.log('BIRTH DATE     : ' + userAccount.birthDate);
              enumerateValidID();
              console.log('ADDRESS        : ' + userAccount.address);
       }
       
       function enumerateValidID(){
              for (id_list of userAccount.validID) {
                     let idList = 'Valid ID       : Passport ID #' + id_list.Passport;
                     console.log(idList);
              }
       }
}

// “withdrawMoney”, which checks if the username and password are correct and enables getting money from the bank account using the account number.
function withdrawMoney(userPasswordConfirm){
       if(userPasswordConfirm == true){
              // console.log("withdrawal successful!");
              function getMoney(amount){
                     //
              }
       }
}

// “depositMoney”, which allows putting money in the bank account using the account number.
function depositMoney(userPasswordConfirm){
       if(userPasswordConfirm == true){
              console.log("deposit successful!");
       }
}

getBankAccountDetails(checkUserPassword("jDelaCruz", "ph@123")) //check account details
withdrawMoney(checkUserPassword("jDelaCruz", "ph@123")) //withdraw money
depositMoney(checkUserPassword("jDelaCruz", "ph@123")) //deposit money

// Thanks for your submission for Home Assignment. Objects & Functions in Web Developer. It didn’t quite meet the requirements for this assignment. Let’s give it another go!

// Your code is interesting but the user need to update his balance, when you deposit there should be a debit in balance and when you withdraw there should be a credit. Have that logic and you're good to go!




// // using Closures
// function createBankAccount(name){
//        let balance = 0;
   
//        function checkBalance(){
//            console.log('Your current balance is $' + balance + " in your account.");
//        }
   
//        function depositAmount(depositamount){
//            balance += depositamount;
//            console.log('Deposit successful, Your new balance is $'+ balance + " in your account");
//        }
   
//        function withdrawAmount(withdrawalamount){
//            if(withdrawalamount > balance)
//            {
//                console.log("You cannot withdraw an amount greater than your current balance");
//            }else{
//                balance -= withdrawalamount;
//                console.log('Withraw successful, Your new balance is $'+ balance + ' in your account');
//            }
//        }
   
//        return {//return result
//            depositAmount,
//            withdrawAmount,
//            checkBalance
//        }
//    }
   
//    const myBank = createBankAccount("ABE");
//    myBank.depositAmount(100);
//    myBank.withdrawAmount(50);
//    myBank.checkBalance();
   