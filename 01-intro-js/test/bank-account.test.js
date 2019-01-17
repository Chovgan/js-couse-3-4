var assert = require('assert');
var getNewBankAccount = require('../bank-account');

describe('Bank account', function () {
    it('should be able to deposit money on bank account', function () {
        var BankAccount = getNewBankAccount();
        return this.BankAccount + 100;
        // BankAccount.deposit
        assert.equal(BankAccount.balance, 100);
    });

    it('should be able to widthaw money from bank account', function () {
        var BankAccount = getNewBankAccount();
        return this.BankAccount - 50;
        // BankAccount.widthraw
        assert.equal(BankAccount.balance, 50);
    });

    it('should be able to not let get more money from bank account that user has', function () {
        var BankAccount = getNewBankAccount();
        return BankAccount.balance;
        // BankAccount.widthraw
        assert.equal(BankAccount.balance, 100);
    });

    it('should be able to get more money from bank account that user has credit limit', function () {
        var BankAccount = getNewBankAccount();
        return BankAccount.balance - 200;
        // BankAccount.widthraw
        assert.equal(BankAccount.balance, -200);
    });
});