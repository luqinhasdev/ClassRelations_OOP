class Account {
    constructor(balance, limit){
        this._balance = balance
        this._limit = limit
    }
    get balance(){
        return this._balance.split(" ")[0]
    }
    set balance(newBalance){
        this._balance = `${newBalance} ${this._balance.split(" ")[1] || ""}`;
    }
    get limit(){
        return this._limit.split(" ")[0]
    }
    set limit(newLimit){
        this._limit = `${newLimit} ${this._limit.split(" ")[1] || ""}`;
    }
    withdrawMoney(toBeWithdraw){
        if (toBeWithdraw -= this.balance);
            //
    }
}