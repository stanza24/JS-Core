async function increaseSalary() {
  let allUsers = await api.getEmployees();
  let averageSalary =
    allUsers.reduce((sumSalary, user) => {
      return sumSalary + user.salary;
    }, 0) / allUsers.length;

  let count = 0;
  let sumSalary = 0;
  for (let user of allUsers) {
    try {
      let response;
      if (user.salary < averageSalary) {
        response = await api.setEmployeeSalary(
          user.id,
          Math.floor(user.salary * 1.2)
        );
      } else {
        response = await api.setEmployeeSalary(
          user.id,
          Math.floor(user.salary * 1.1)
        );
      }
      await api.notifyEmployee(
        user.id,
        `Hello, ${response.name}! Congratulations, your new salary is ${response.salary}!`
      );
      count++;
      sumSalary += response.salary;
    } catch (error) {
      await api.notifyAdmin(error);
    }
  }
  await api.sendBudgetToAccounting(sumSalary);
  return count;
}

const api = {
  _employees: [
    { id: 1, name: "Alex", salary: 120000 },
    { id: 2, name: "Fred", salary: 110000 },
    { id: 3, name: "Bob", salary: 80000 },
    { id: 10, name: "Tim", salary: 135000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      const updatedEmployees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
              ...employee,
              salary: newSalary,
            }
      );
      this._employees = updatedEmployees;
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve();
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },

  sendBudgetToAccounting(newBudget) {
    return new Promise((resolve) => {
      resolve();
    });
  },
};

export { increaseSalary, api };
