"""
Flash USDT Simulation - Educational only
Demonstrates mock USDT transfers without real funds
"""

class MockUSDT:
    def __init__(self):
        self.ledger = {}

    def create_account(self, name):
        if name not in self.ledger:
            self.ledger[name] = 1000

    def transfer(self, sender, receiver, amount):
        if self.ledger.get(sender, 0) < amount:
            print("Insufficient balance")
            return False
        if receiver not in self.ledger:
            self.create_account(receiver)
        self.ledger[sender] -= amount
        self.ledger[receiver] += amount
        print(f"{amount} mock USDT transferred from {sender} to {receiver}")
        return True

    def balance(self, name):
        return self.ledger.get(name, 0)

# Example usage
sim = MockUSDT()
sim.create_account("Alice")
sim.create_account("Bob")
sim.transfer("Alice", "Bob", 250)
print("Alice balance:", sim.balance("Alice"))
print("Bob balance:", sim.balance("Bob"))
