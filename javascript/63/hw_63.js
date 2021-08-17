(function () {
    'use strict';

    function account() {
        return {
            balance: 0,
            performTransaction: function (transactionAmount) {
                this.balance += transactionAmount;
                }
        };
    }

    let checking = account();
    checking.performTransaction(10);
    console.log('checking + 10, balance is =', checking.balance);
    checking.performTransaction(-3);
    console.log('checking - 3, balance is =', checking.balance);

    let savings = account();
    savings.performTransaction(10);
    console.log('savings + 10, balance is =', savings.balance);
    savings.performTransaction(-3);
    console.log('savings - 3, balance is =', savings.balance);

    function transaction(transactionAmount) {
        this.balance += transactionAmount;
    }

    //const otherTransactions = account.performTransaction;

    transaction.call(checking, 11);
    console.log('checking + 11 using separate function & call, balance is =', checking.balance);

    transaction.apply(checking, [11]);
    console.log('checking + 11 using separate function & apply, balance is =', checking.balance);
}());