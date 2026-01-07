/**
 * Flash USDT Simulation - Educational only
 * Demonstrates mock USDT transfers without real funds
 */

class MockUSDT {
    constructor() {
        this.ledger = {};
    }

    createAccount(name) {
        if (!this.ledger[name]) this.ledger[name] = 1000; // start with 1000 mock tokens
    }

    transfer(from, to, amount) {
        if (!this.ledger[from] || this.ledger[from] < amount) {
            console.log("Insufficient balance");
            return false;
        }
        if (!this.ledger[to]) this.createAccount(to);

        this.ledger[from] -= amount;
        this.ledger[to] += amount;
        console.log(`${amount} mock USDT transferred from ${from} to ${to}`);
        return true;
    }

    balance(name) {
        return this.ledger[name] || 0;
    }
}

// Example usage
const simulation = new MockUSDT();
simulation.createAccount("Alice");
simulation.createAccount("Bob");
simulation.transfer("Alice", "Bob", 250);
console.log("Alice balance:", simulation.balance("Alice"));
console.log("Bob balance:", simulation.balance("Bob"));
