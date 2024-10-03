import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '../Pages/LoginPage'

Given("A web browser is at the School Management System login page", () => {
  cy.visit("/");
  cy.get('[href="/choose"] > .MuiButtonBase-root').click()
});

Then("the url will contains the choose subdirectory", () => {
  cy.url().should("contains", "/choose");
});

Given("User will navigate to admin login", () => {
  cy.get(':nth-child(1) > .MuiPaper-root').click();
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});

Then("the url will contains the Adminlogin subdirectory", () => {
  cy.get("h1.MuiTypography-root").should("have.text", "Admin Dashboard");
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
