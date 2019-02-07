/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
    if (type ===  "quarter") {
        this.cashTendered += 25;
    } else if (type === "dime") {
        this.cashTendered += 10;
    } else if (type === "nickel") {
        this.cashTendered += 5;
    } else if (type === "penny") {
        this.cashTendered += 1;
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
       if (this.cashTendered >= this.amountDue) {
       return true;
       } else if(this.cashTendered < this.amountDue) {
           return false;
       }
    }

    giveChange() {
            let quarters = 0;
            let dimes = 0;
            let nickels = 0;
            let pennies = 0;
        if (this.cashTendered > this.amountDue) {
            let change = this.cashTendered - this.amountDue
        while (change >= 0) {
            if (change >= 25) {
                quarters = quarters +1;
                change -= 25;
            }
            if (change >= 10) {
                quarters = dimes +1;
                change -= 10;
            }
            if (change >= 5) {
                quarters = nickels +1;
                change -= 5;
            }
            if (change >= 1) {
                quarters = pennies +1;
                change -= 1;
            }
        }
        return {
            quarters: this.quarters,
            dimes: this.dimes,
            nickels: this.nickels,
            pennies: this.pennies,
        }
    }
}
}
        // let coins = {
        //          quarters:0
        //          dimes: 0
        //          nickels: 0 
        //          pennies: 0
        // }

        // let change = this.amountDue - this.cashTendered
        // quarters = change / 0.25
        // change= change % 0.25

        // dimes = change / 0.10
        // change = change % 0.10

        // nickels = change / 0.05
        // change = change % 0.05

        // pennies = change / 0.01
        // change = change % 0.01
        // TODO return the correct change in the following format...