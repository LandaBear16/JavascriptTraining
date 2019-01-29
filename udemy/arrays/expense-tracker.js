const account = {
  name: "Yolanda",
  expenses: [],
  addExpense: (description, amount) => {
    this.expenses;
  }
};

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Yolanda has $1250 in expenses.

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
console.log(account.getAccountSummary());
