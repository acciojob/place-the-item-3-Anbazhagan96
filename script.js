() => {
    cy.visit(baseUrl + "/main.html");
    cy.get('.holder').should('have.css', 'display', 'flex');
    cy.get('.holder').should('have.css', 'justify-content', 'space-between'); // Change to space-between if needed
    cy.get('.holder').should('have.css', 'flex-wrap', 'wrap');
}