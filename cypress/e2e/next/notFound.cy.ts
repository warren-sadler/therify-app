describe("Next.js 404 page", () => {
  it("should render 404 page", () => {
    cy.visit("http://localhost:3000/not-found", {
      failOnStatusCode: false,
    }).contains("404");
  });
});
