const Employee = require("../lib/Employee");

describe("Initialization", () => {
  describe("Employee", () => {
    it("Can create employee", () => {
      const e = new Employee();
      expect(typeof e).toBe("object");
    });
  });

  // Get name
  describe("getName()", () => {
    it("Can set name", () => {
      const name = "Jack";
      const e = new Employee(name);
      expect(e.name).toBe(name);
    });
  });

  // Get Id
  describe("getId()", () => {
    it("Can set id", () => {
      const testValue = 100;
      const e = new Employee("Jack", testValue);
      expect(e.id).toBe(testValue);
    });
  });

  // Get email
  describe("getEmail()", () => {
    it("Can set email", () => {
      const testValue = "unit@test.com";
      const e = new Employee("Jack", 1, testValue);
      expect(e.email).toBe(testValue);
    });
  });

  describe("getEmail()", () => {
    it("Can get name by getName()", () => {
      const testValue = "Jack";
      const e = new Employee(testValue);
      expect(e.getName()).toBe(testValue);
    });
  });

  describe("getId()", () => {
    it("Can get id via getId()", () => {
      const testValue = 100;
      const e = new Employee("Jack", testValue);
      expect(e.getId()).toBe(testValue);
    });
  });

  describe("getEmail()", () => {
    it("Can get email by getEmail()", () => {
      const testValue = "unit@test.com";
      const e = new Employee("Jack", 1, testValue);
      expect(e.getEmail()).toBe(testValue);
    });
  });

  describe("getRole()", () => {
    it('getRole() should return "Employee"', () => {
      const testValue = "Employee";
      const e = new Employee("Jack", 1, "unit@test.com");
      expect(e.getRole()).toBe(testValue);
    });
  });
});