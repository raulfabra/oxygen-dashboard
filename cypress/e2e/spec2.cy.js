describe("Test login", () => {
  it("sucessfully loads", () => {
    cy.visit("http://localhost:5173/");
  });

  it("check for protected routes", () => {
    cy.visit("http://localhost:5173/rooms");
    cy.url().should("include", "/login");
  });

  it("sucessfully redirects to login", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");
  });

  it("test for invalid user", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[type="email"]').type("manolo@gmail.com");
    cy.get('input[type="password"]').type("1234");
    cy.get('input[type="password"]').type(`{enter}`);

    cy.get("span").should("contain", "Identificated don't match.");
  });

  it("test for invalid password", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[type="email"]').type("employer33@gmail.com");
    cy.get('input[type="password"]').type("admin");
    cy.get('input[type="password"]').type(`{enter}`);

    cy.get("span").should("contain", "Identificated don't match.");
  });

  it("test for valid login", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[type="email"]').type("employer33@gmail.com");
    cy.get('input[type="password"]').type("1234");
    cy.get('input[type="password"]').type(`{enter}`);

    cy.url().should("equal", "http://localhost:5173/dashboard");
  });
});
