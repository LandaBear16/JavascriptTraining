const account = {
  name: "Yolanda",
  expenses: [],
  income: [],
  addIncome: function(description, amount) {
    this.income.push({
      description,
      amount
    });
  },
  addExpense: function(description, amount) {
    this.expenses.push({
      description,
      amount
    });
  },
  getAccountSummary: function() {
    let expenseTotal = 0;
    let incomeTotal = 0;
    this.expenses.forEach(function(expense) {
      expenseTotal += expense.amount;
    });
    this.income.forEach(function(income) {
      incomeTotal += income.amount;
    });
    let balance = incomeTotal - expenseTotal;
    return `${
      this.name
    } has a balance of $${balance}. $${incomeTotal} in income. $${expenseTotal} in expenses. `;
  }
};

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Yolanda has $1250 in expenses.

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2.5);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());
