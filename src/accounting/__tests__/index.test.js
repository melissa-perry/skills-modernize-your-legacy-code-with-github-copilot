// __tests__/index.test.js
// Unit tests for Node.js Student Account Management System

const fs = require('fs');
const path = require('path');
const BALANCE_FILE = path.join(__dirname, '../balance.json');
const INITIAL_BALANCE = 1000.00;

// Import functions from index.js
let app;
let loadBalance, saveBalance;
beforeAll(() => {
  app = require('../index');
  loadBalance = app.loadBalance;
  saveBalance = app.saveBalance;
});

describe('Student Account Management System', () => {
  beforeEach(() => {
    // Reset balance before each test
    fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance: INITIAL_BALANCE }));
  });

  test('TC01: View initial account balance', () => {
    expect(loadBalance()).toBe(INITIAL_BALANCE);
  });

  test('TC02: Credit account with valid amount', () => {
    let balance = loadBalance();
    balance += 200.00;
    saveBalance(balance);
    expect(loadBalance()).toBe(1200.00);
  });

  test('TC03: Debit account with valid amount', () => {
    let balance = loadBalance();
    balance -= 300.00;
    saveBalance(balance);
    expect(loadBalance()).toBe(700.00);
  });

  test('TC04: Debit account with insufficient funds', () => {
    saveBalance(100.00);
    let balance = loadBalance();
    const amount = 200.00;
    if (balance >= amount) {
      balance -= amount;
      saveBalance(balance);
    }
    // Should not change balance
    expect(loadBalance()).toBe(100.00);
  });

  test('TC05: Credit account with zero amount', () => {
    let balance = loadBalance();
    balance += 0.00;
    saveBalance(balance);
    expect(loadBalance()).toBe(1000.00);
  });

  test('TC06: Debit account with zero amount', () => {
    let balance = loadBalance();
    balance -= 0.00;
    saveBalance(balance);
    expect(loadBalance()).toBe(1000.00);
  });

  test('TC09: Multiple sequential credits and debits', () => {
    let balance = loadBalance();
    balance += 100.00;
    saveBalance(balance);
    balance = loadBalance();
    balance -= 50.00;
    saveBalance(balance);
    expect(loadBalance()).toBe(1050.00);
  });
});
