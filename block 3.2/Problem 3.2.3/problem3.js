function increaseSalary() {
  return new Promise((resolve) => {
    api
      .getEmployees()
      .then((employees) => {
        let employeeWithMinSalary = employees[0];
        employees.forEach((item) => {
          if (item.salary < employeeWithMinSalary.salary) {
            employeeWithMinSalary = item;
          }
        });
        return api.setEmployeeSalary(
          employeeWithMinSalary.id,
          employeeWithMinSalary.salary * 1.2
        );
      })
      .then((employee) => {
        api
          .notifyEmployee(
            employee.id,
            `Hello, ${employee.name}! Congratulations, your new salary is ${employee.salary}!`
          )
          .then(() => {
            resolve(true);
          });
      })
      .catch((error) => {
        api.notifyAdmin(error).then(() => {
          resolve(false);
        });
      });
  });
}

const api = {
  _employees: [
    { id: 1, name: "Alex", salary: 120000 },
    { id: 2, name: "Fred", salary: 110000 },
    { id: 3, name: "Bob", salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      this._employees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
              ...employee,
              salary: newSalary,
            }
      );
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
      resolve(true);
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },
};

export { increaseSalary, api };
