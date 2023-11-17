class Person {
  constructor(firstName, lastName, dateBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateBirth = dateBirth;
  }
  getAge() {
    let date = new Date(2019, 4, 23);
    let birth = new Date(this.dateBirth);
    let age = date.getTime() - birth.getTime();
    return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Account {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
    this.history = [];
  }
  addMoney(amount, description) {
    this.amount += amount;
    this.history.push({
      timestamp: new Date().getTime(),
      description: description,
      amount: amount,
      target: "in",
    });
  }
  withdrawMoney(amount, description) {
    this.amount -= amount;
    this.history.push({
      timestamp: new Date().getTime(),
      description: description,
      amount: amount,
      target: "out",
    });
  }
  getAmount() {
    return this.amount;
  }
  getAccountHistory() {
    return this.history;
  }
  static transfer(fromAccount, toAccount, amount) {
    fromAccount.amount -= amount;
    fromAccount.history.push({
      timestamp: new Date().getTime(),
      description: "transfer",
      amount: amount,
      target: "out",
    });

    toAccount.amount += amount;
    toAccount.history.push({
      timestamp: new Date().getTime(),
      description: "transfer",
      amount: amount,
      target: "in",
    });
  }
}

export { Person, Account };
