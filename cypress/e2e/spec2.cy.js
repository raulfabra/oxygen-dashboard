describe("Login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("frontpage can be opened", () => {
    cy.contains("HOTEL MIRANDA DASHBOARD").should("be.visible");
  });

  it("login form can be seen", () => {
    cy.get("form").should("be.visible");
  });

  it("login fails with wrong password", () => {
    cy.get('input[type="email"]').type("manolo@gmail.com");
    cy.get('input[type="password"]').type("soyunGnomo");
    cy.get('button[type="submit"]').should("contain", "LOGIN").click();
    cy.contains("Identificated don't match.").should("be.visible");
  });

  it("user can be login", () => {
    cy.get('input[type="email"]').type("employer33@gmail.com");
    cy.get('input[type="password"]').type("1234");
    cy.get('button[type="submit"]').should("contain", "LOGIN").click();

    cy.url().should("equal", "http://localhost:5173/dashboard");
  });

  describe("when not logged in", () => {
    beforeEach(() => {
      window.localStorage.clear();
    });
    it("user can not been going to dashboard app", () => {
      cy.visit("http://localhost:5173/rooms");
      cy.url().should("include", "/login");
      cy.contains("HOTEL MIRANDA DASHBOARD").should("be.visible");
    });
  });
});
