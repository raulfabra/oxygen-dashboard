describe("Login Page", () => {
  it("see login page", () => {
    cy.visit("http://localhost:5173/login");
    cy.url().should("include", "/login");
  });
  it("correct login form", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('input[type="email"]').should("be.visible");
    cy.get('input[type="password"]').should("be.visible");
  });
  it("correct date email & password", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('input[type="email"]').type("employer33@gmail.com");
    cy.get('input[type="password"]').type("1234");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });
});
