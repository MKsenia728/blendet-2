// Напиши скрипт керування особистим кабінетом інтернет банку.
// Є об'єкт account, в якому потрібно реалізувати методи роботи із балансом та історією транзакцій

// Типів транзакцій всього два.Можна або покласти гроші на рахунок, або зняти гроші з рахунка

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
}

// Кожна транзакція - це об'єкт із властивостями id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  //історія транзакцій
  transactions: [],

  // Метод створює та повертає об'єкт транзакцій
  // Приймає суму та тип транзакції

  createTransaction(type, amount) {
    return {
      id: this.transactions.length,
      type,
      amount,
    }
  },

  // Метод відповідає за додавання суми до балансу.
  // Приймає суму транзакції
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(Transaction.DEPOSIT, amount));
  },

  // Метод відповідає за зняття суми з балансу.
  // Приймає суму тразакцій.
  // Викликає createTransaction для створення об'єкта транзакції
  // Після чого додає його до історії транзакцій
  // Якщо amount більше за поточний баланс, виводимо повідомлення про те, що на рахунку недостатньо коштів

  withdraw(amount) {
    if (amount > this.balance) {
      return console.log('на рахунку недостатньо коштів');
    }
    this.balance -= amount;
    this.transactions.push(this.createTransaction(Transaction.WITHDRAW, amount));
  },

  // Метод, що повертає поточний баланс
  getBalance() {
    return this.balance;
  },

  // Метод шукає та повертає об'єкта транзакції по id
  getTransactionDetails(id) {
    for (const elem of this.transactions) {
      if (elem.id === id) {
        return elem;
      }
    } return 'not found';
  },

  // Метод повертає кількість коштів певного типу тразакції зі всієї історії транзакції
  getTransactionType(type) {
    let sum = 0;
    for (const elem of this.transactions) {
      if (elem.type === type) {
        sum += elem.amount;
      }
    }
    return sum;
  },
}

account.withdraw(100);


account.deposit(1000);
account.deposit(500);
account.deposit(200);
account.withdraw(700);
account.withdraw(300);
console.log(account.transactions);
console.log(account.getTransactionDetails(3));
console.log(`type ${Transaction.DEPOSIT} : ${account.getTransactionType(Transaction.DEPOSIT)}`);
console.log(`balance : ${account.getBalance()}`)

