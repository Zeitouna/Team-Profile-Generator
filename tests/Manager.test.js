const Employee = require("../lib/Manager");

describe('Manager', () => {
  it('initialize', () => {
    const newEmployee = new Employee("Hermann Michael", 01, "hermann.m@gmail.com");

    expect(newEmployee.name).toEqual("Hermann Michael");
    expect(newEmployee.id).toEqual(01);
    expect(newEmployee.email).toEqual("hermann.m@gmail.com");

    expect(newEngineer.getName()).toEqual("Hermann Michael")
    expect(newEngineer.getId()).toEqual(01);
    expect(newEngineer.getEmail()).toEqual("hermann.m@gmail.com");
    expect(newEngineer.getRole()).toEqual("Manager");
  });
});
