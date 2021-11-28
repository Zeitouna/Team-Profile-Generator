const Engineer = require("../lib/Engineer");


describe('Engineer', () => {
  it('initialize', () => {
    const newEngineer = new Engineer("Matias Ferrer", 02, "matias.f@gmail.com", "https://github.com/matias.ferrer");

    expect(newEngineer.name).toEqual("Matias Ferrer");
    expect(newEngineer.id).toEqual(02);
    expect(newEngineer.email).toEqual("matias.f@gmail.com");
    expect(newEngineer.github).toEqual("https://github.com/matias.ferrer");

    expect(newEngineer.getName()).toEqual("Matias Ferrer")
    expect(newEngineer.getId()).toEqual(02);
    expect(newEngineer.getEmail()).toEqual("matias.f@gmail.com");
    expect(newEngineer.getGithub()).toEqual("https://github.com/matias.ferrer");
    expect(newEngineer.getRole()).toEqual("Engineer");
  });
});
