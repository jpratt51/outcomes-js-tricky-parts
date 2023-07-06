function createAccount(initPin, initDeposit) {
    let pin = initPin;
    let balance = initDeposit || 0;
    console.log(pin, balance);
    return {
        checkBalance(pinAttempt) {
            return pinAttempt === pin ? `$${balance}` : "Invalid PIN.";
        },
        deposit(pinAttempt, deposit) {
            if (pinAttempt === pin) {
                balance = balance + deposit;
                return `Succesfully deposited $${deposit}. Current balance: $${balance}.`;
            } else {
                return "Invalid PIN.";
            }
        },
        withdraw(pinAttempt, withdrawal) {
            if (pinAttempt === pin) {
                if (withdrawal <= balance) {
                    balance = balance - withdrawal;
                    return `Succesfully withdrew $${withdrawal}. Current balance: $${balance}.`;
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
            }
            return "Invalid PIN.";
        },
        changePin(pinAttempt, newPin) {
            if (pinAttempt === pin) {
                pin = newPin;
                return "PIN successfully changed!";
            }
            return "Invalid PIN.";
        },
    };
}

let count = createAccount(1234, 2000);

module.exports = { createAccount };
