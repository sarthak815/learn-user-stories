import { Bank } from '../src/bank';

const accounts = [{ id: 1234567890, balance: 5000 },
{ id: 1234567891, balance: 10000 }];
const usernames = ['user1', 'user2'];
const bank = new Bank(accounts, usernames);
// Scenario 1: successful account created
const acc = bank.createAccount('user1', 20, 1234567892);
if (acc.id !== 1234567892
    || acc.balance !== 0
    || acc.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}
try {
    bank.createAccount('user1', 20, 1234567892);
    console.log('Scenario 1 failed');
}
catch (e) {
    console.log('Scenario 1 passed');
}
// scenario 2: unsuccessful account creation due to customer being below 18
try {
    bank.createAccount('user1', 17, 1234567899);
    console.log('Scenario 2 failed');
}
catch (e) {
    console.log('Scenario 2 passed');
}
// Scenario 3: unsuccessful account creation due to invalid username
try {
    bank.createAccount('user3', 20, 1234567888);
    console.log('Scenario 3 failed');
}
catch (e) {
    console.log('Scenario 3 passed');
}

// Scenario 4: successful money deposit
try {
    bank.deposit(1234567890, 5000)
    console.log('Scenario 4 passed');
}
catch (e) {
    console.log('Scenario 4 failed');
}

// Scenario 5: unsuccessful money deposit due to invalid amount
try {
    bank.deposit(1234567890, -5000)
    console.log('Scenario 5 failed');
} catch (e) {
    console.log('Scenario 5 passed');
}

// Scenario 6: unsuccessful money deposit due to invalid account number
try {
    bank.deposit(123456789, 5000)
    console.log('Scenario 6 failed');
} catch (e) {
    console.log('Scenario 6 passed');
}

// Scenario 7: successful money withdrawal
try {
    bank.withdraw(1234567890, 5000)
    console.log('Scenario 7 passed');
} catch (e) {
    console.log('Scenario 7 failed');
}

// Scenario 8 : unsuccessful money withdrawal due to invalid amount
try {
    bank.withdraw(1234567890, -5000)
    console.log('Scenario 8 failed');
} catch (e) {
    console.log('Scenario 8 passed');
}

// Scenario 9: unsuccessful money withdrawal due to insufficient balance
try {
    bank.withdraw(1234567890, 10000)
    console.log('Scenario 9 failed');
} catch (e) {
    console.log('Scenario 9 passed');
}

// Scenario 10: unsuccessful money withdrawal due to invalid account
try {
    bank.withdraw(123456789, 5000)
    console.log('Scenario 10 failed');
} catch (e) {
    console.log('Scenario 10 passed');
}