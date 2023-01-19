function checkCashRegister(price, cash, cid) {

    let change = [];
    let changeToReturn = cash - price;
    let cidTotal = cid.reduce((acc, curr) => acc + curr[1], 0);

    let money = {
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.1,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100
    };

    if (cidTotal < changeToReturn) {
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    } 
    else if (cidTotal === changeToReturn) {
        return {status: 'CLOSED', change: [...cid]};
    }
    for (let i = cid.length - 1; i >= 0; i--) {
        let cashName = cid[i][0];
        let cashValue = money[cashName];
        let cashCount = cid[i][1] / cashValue;
        let cashExchange = 0;

        while (changeToReturn >= cashValue && cashCount > 0) {
            changeToReturn -= cashValue;
            cashCount--;
            cashExchange++;
            changeToReturn = Math.round(changeToReturn * 100) / 100;
        }

        if (cashExchange > 0) {
            change.push([cashName, cashExchange * cashValue]);
        }
    }

    if (changeToReturn > 0) {
      return {status: 'INSUFFICIENT_FUNDS', change: []};
    }

    return {status: 'OPEN', change: change};
  }
  
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]])
);