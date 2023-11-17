import { Person, Account } from "./problem5";

describe("bank-account", () => {
  let person;
  let account;

  beforeEach(() => {
    // Подготовка объектов для тестирования перед каждым тестом
    person = new Person("Test", "User", "1990-01-01");
    account = new Account(person, 1000);
  });

  test("проверка ввода/вывода средств", () => {
    account.addMoney(500, "Deposit");
    expect(account.getAmount()).toBe(1500);
    account.withdrawMoney(200, "Withdrawal");
    expect(account.getAmount()).toBe(1300);
  });

  test("проверка перевода", () => {
    const recipientPerson = new Person("Recipient", "User", "1992-02-02");
    const recipientAccount = new Account(recipientPerson, 500);
    Account.transfer(account, recipientAccount, 300);
    expect(account.getAmount()).toBe(700);
    expect(recipientAccount.getAmount()).toBe(800);
  });

  test("проверка fullName", () => {
    expect(person.fullName).toBe("Test User");
  });

  test("проверка расчета возраста (если бы сегодня было 2019-05-23)", () => {
    // Мокаем объект Date
    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => new Date("2019-05-23").getTime());
    global.Date.now = dateNowStub;

    expect(person.getAge()).toBe(29); // Возраст на 2019-05-23 для человека, родившегося 1990-01-01

    // Восстанавливаем реальное поведение Date.now после теста
    global.Date.now = realDateNow;
  });
});
