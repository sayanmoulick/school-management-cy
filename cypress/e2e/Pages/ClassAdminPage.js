class ClassAdminPage {
    ifElementExists (selector, attempt = 0) => {
        if (attempt === 100) return null           // no appearance, return null
        if (Cypress.$(selector).length === 0) {
            cy.wait(100, { log: false })                // wait in small chunks
                .then(() => ifElementExists(selector, ++attempt))      // try again
        }
        return cy.get(selector, { log: false })       // done, exit with the element
    }
}

export const classAdminPage = new ClassAdminPage();
