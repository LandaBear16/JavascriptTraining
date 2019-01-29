let myAccount = {
  name: "Yolanda",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses += amount;
};

const addIncome = function(account, incomeAmount) {
  account.income += incomeAmount;
};

const resetAccount = function(account) {
  account.income = 0;
  account.expenses = 0;
};

const getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  console.log(
    `Account for ${account.name} has $${balance}. $${
      account.income
    } in income. $${account.expenses} in expenses.`
  );
};

addIncome(myAccount, 1000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 400);
getAccountSummary(myAccount);
resetAccount(myAccount);
getAccountSummary(myAccount);
