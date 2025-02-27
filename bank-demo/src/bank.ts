import { BankType, AccountType } from './types';
/**
 * This class implements a bank that can
 * maintain accounts and create new accounts
 */
export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private usernames: string[] = [];
    /**
     * The constructor initialized the bank with accounts and usernames
     * @param accounts - array of accounts
     * @param usernames - array of usernames
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }
    /**
     * 
     * @param id - account id
     * @returns - true if account id ezists, false otherwise
     */
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    /**
     * Checks if the provided account number is invalid.
     *
     * An account number is considered invalid if its length is not equal to 10 digits.
     *
     * @param accountNumber - The account number to validate.
     * @returns `true` if the account number is invalid, otherwise `false`.
     */
    private isAccountNumberInvalid(accountNumber: number): boolean {
        return accountNumber.toString().length !== 10;
    }
    /**
     * 
     * @param username 
     * @returns true if username exists, false otherwise
     */
    private isUsernameExisits(username: string): boolean {
        return this.usernames.includes(username);
    }
    /**
     * 
     * @param username 
     * @param age 
     * @param accountNumber 
     * @returns a new account with a ten-digit unique id and zero balance
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if (this.isAccountNumberInvalid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if (!this.isUsernameExisits(username)) {
            throw new Error('User not found');
        }
        if (age < 18) {
            throw new Error('User is under 18');
        }
        if (this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }
        const account: AccountType = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * Deposits a specified amount into the account with the given account number.
     *
     * @param accountNumber - The number of the account to deposit into.
     * @param amount - The amount of money to deposit.
     * @returns `true` if the deposit was successful, `false` if the account was not found.
     */
    deposit(accountNumber: number, amount: number): Boolean {
        const account = this.findAccountById(accountNumber);
        if (!account) {
            throw new Error('User not found');
        }
        if (amount < 0) {
            throw new Error('Invalid amount');
        }
        account.balance += amount;
        return true;
    }

    /**
     * Withdraws a specified amount from the account with the given account number.
     *
     * @param accountNumber - The number of the account to withdraw from.
     * @param amount - The amount of money to withdraw.
     * @returns A boolean indicating whether the withdrawal was successful.
     */
    withdraw(accountNumber: number, amount: number): Boolean {
        const account = this.findAccountById(accountNumber);
        if (!account) {
            throw new Error('User not found');
        }
        if (amount < 0) {
            throw new Error('Invalid amount');
        }
        if (account.balance < amount) {
            throw new Error('Insufficient balance');
        }
        account.balance -= amount;
        return true;
    }

    /**
     * Checks the balance of the account with the given account number.
     *
     * @param accountNumber - The number of the account to check the balance of.
     * @returns The balance of the account
     * @throws An error if the account number is invalid
    */
    checkBalance(accountNumber: number): number {
        const account = this.findAccountById(accountNumber);
        if (!account) {
            throw new Error('User not found');
        }
        return account.balance;
    }
}