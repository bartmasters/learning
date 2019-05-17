function checkCashRegister(price, cash, cid) {
    const noteVals = {
        PENNY: 1,
        NICKEL: 5,
        DIME: 10,
        QUARTER: 25,
        ONE: 100,
        FIVE: 500,
        TEN: 1000,
        TWENTY: 2000,
        'ONE HUNDRED': 10000,
    };

    const change = {
        status: '',
        change: [],
    };

    const changeMoney = [];
    let diff = cash * 100 - price * 100;
    let totalNoteCount = 0;

    // Work backwards through the cid

    for (let i = cid.length - 1; i >= 0; i -= 1) {
        const currNoteAmt = cid[i][1] * 100;
        const currNoteDesc = cid[i][0];
        const currNoteMin = noteVals[currNoteDesc];
        const currNoteCount = currNoteAmt / currNoteMin;
        totalNoteCount += currNoteCount;

        if (currNoteMin <= diff) {
            const reqCount = Math.trunc(diff / currNoteMin);
            let changeCurrAmt = reqCount * currNoteMin;
            if (changeCurrAmt > currNoteAmt) {
                changeCurrAmt = currNoteAmt;
                totalNoteCount -= currNoteCount;
            } else {
                totalNoteCount -= reqCount;
            }
            const currNoteArr = [currNoteDesc, changeCurrAmt / 100];
            changeMoney.push(currNoteArr);
            diff -= changeCurrAmt;
        }
        if (diff <= 0) {
            i = -1;
        }
    }

    if (diff === 0) {
        if (totalNoteCount === 0) {
            change.status = 'CLOSED';
            change.change = cid;
        } else {
            change.status = 'OPEN';
            change.change = changeMoney;
        }
    } else {
        change.status = 'INSUFFICIENT_FUNDS';
    }

    // Here is your change, ma'am.
    return change;
}

/* checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]); */

checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
]);

/* checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]); */

/* checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]); */
