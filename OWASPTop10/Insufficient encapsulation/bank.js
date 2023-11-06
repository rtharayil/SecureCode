class BankAccount {
    accountnumber = crypto.randomUUID(); 
    balance = 0;

    withdraw = function(amount) {
        if ( this.balance >= amount ) {
            this.balance = this.balance - amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    deposit = function(amount) {
        this.balance = this.balance + amount;
    }
}

function transfer(amount, fromAccount, toAccount) {
    fromAccount.balance = fromAccount.balance - amount;
    toAccount.balance = toAccount.balance + amount;
}