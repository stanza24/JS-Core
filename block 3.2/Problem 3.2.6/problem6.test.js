import { api, increaseSalary } from "./problem6";

describe("increaseSalaryAsyncAwait", () => {
  test("функция должна возвращать промис", () => {
    const promise = increaseSalary();
    expect(promise).toBeInstanceOf(Promise);
  });

  test("должна корректно увеличивать ЗП всем сотрудникам и отправлять бюджет", async () => {
    const originalEmployees = [...api._employees];
    const notificationsSpy = jest.spyOn(api, "notifyEmployee");
    const salarySpy = jest.spyOn(api, "setEmployeeSalary");
    const budgetSpy = jest.spyOn(api, "sendBudgetToAccounting");

    const count = await increaseSalary();
    expect(count).toBe(originalEmployees.length);
    expect(notificationsSpy).toHaveBeenCalledTimes(originalEmployees.length);
    expect(salarySpy).toHaveBeenCalledTimes(originalEmployees.length);
    originalEmployees.forEach((employee) => {
      expect(api._employees.find((e) => e.id === employee.id).salary).not.toBe(
        employee.salary
      );
    });
    expect(budgetSpy).toHaveBeenCalledWith(expect.any(Number));

    jest.restoreAllMocks();
  });

  test("должна отправлять уведомление сотрудникам", async () => {
    const notificationsSpy = jest
      .spyOn(api, "notifyEmployee")
      .mockResolvedValue(true);

    await increaseSalary();

    expect(notificationsSpy).toHaveBeenCalledTimes(api._employees.length);
    api._employees.forEach((employee) => {
      expect(notificationsSpy).toHaveBeenCalledWith(
        employee.id,
        expect.stringContaining(employee.name)
      );
    });

    jest.restoreAllMocks();
  });

  test("в случае ошибки увеличения ЗП должна отправлять уведомление администратору, но не пользователю", async () => {
    const error = new Error("Test Error");
    const setSalarySpy = jest
      .spyOn(api, "setEmployeeSalary")
      .mockRejectedValue(error);
    const notifyAdminSpy = jest
      .spyOn(api, "notifyAdmin")
      .mockResolvedValue(true);
    const notifyEmployeeSpy = jest.spyOn(api, "notifyEmployee");

    await increaseSalary();

    expect(setSalarySpy).toHaveBeenCalled();
    expect(notifyAdminSpy).toHaveBeenCalledWith(error);
    expect(notifyEmployeeSpy).not.toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining("Congratulations")
    );

    jest.restoreAllMocks();
  });
});
