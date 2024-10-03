import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

// import {classAdminPage} from '../Pages/ClassAdminPage'

// import 'cypress-mochawesome-reporter/cucumberSupport';
var flag = 0;

function elementExists (selector, attempt = 0) {

  const interval = 100;  // 100ms between tries
  if (attempt * interval > Cypress.config('defaultCommandTimeout')) {
    cy.log(selector, 'not found')
    return cy.wrap(false, {log:false})      
  }

  return cy.get('body', {log:false}).then(($body) => {
    const element = $body.find(selector)
    if (element.length) {
      cy.log(selector, 'found')
      return cy.wrap(true, {log:false}) 
    } else {
      cy.wait(interval, {log:false})  
      return elementExists(selector, ++attempt)
    }
  })
}
    
Given("Admin User has logged in to system and navigated to class page", () => { 
    cy.LoginAPI().then(function()
        {
            cy.visit("/Admin/classes",
            {
                onBeforeLoad :function(window)
                {
                    window.localStorage.setItem('user',Cypress.env('user'))
                }

            })       

    })
});

Then("A user clicks on the Add Class button", () => {

    elementExists('.MuiTableContainer-root').then(exists => {
        if (exists) {
            // cy.get("button[aria-label='SpeedDial playground example']").trigger('onmouseover');
            cy.get("button[aria-label='SpeedDial playground example']").click();
            cy.get("#SpeedDialplaygroundexample-actions button[aria-label='Add New Class']").click({ force: true });
            flag = 1;
        } else {
            cy.get('.css-fxbtpg > .MuiBox-root > .MuiButtonBase-root').click(); 
        }
    })

    // cy.get('.MuiTableContainer-root').then(($el) => {
    //     if ($el.length) {
    //         // cy.get("button[aria-label='SpeedDial playground example']").trigger('onmouseover');
    //         cy.get("button[aria-label='SpeedDial playground example']").click();
    //         cy.get("#SpeedDialplaygroundexample-actions button[aria-label='Add New Class']").click({ force: true });
    //         // #SpeedDialplaygroundexample-actions button[aria-label='Delete All Classes']
    //         flag = 1;
    //     } else {
    //         cy.get('.css-fxbtpg > .MuiBox-root > .MuiButtonBase-root').click();   
    //     }
    // }); 
});

Then("user enters the class name", () => {
    if (flag === 0) cy.get('input').type("Automatically generated");
    else cy.get('input').type("Automatically generated 2");
});

Then("User clicks on create button", () => {
    cy.get('.MuiButton-contained').click();
});


Then("Verify new class has been created as per user given name", () => {
    cy.get('.MuiTabPanel-root > .MuiTypography-root.MuiTypography-h4').should("have.text", "Class Details");
    if (flag === 0) cy.get('.MuiTabPanel-root > .MuiTypography-root.MuiTypography-h5').should("have.text", "This is Class Automatically generated");
    else cy.get('.MuiTabPanel-root > .MuiTypography-root.MuiTypography-h5').should("have.text", "This is Class Automatically generated 2");
});

Then("A user clicks on the SpeedDial button", () => {
    cy.get("button[aria-label='SpeedDial playground example']").click();
});

Then("User clicks on delete all button", () => { 
    cy.get("#SpeedDialplaygroundexample-actions button[aria-label='Delete All Classes']").click({ force: true });
});

Then("Verify no class records is present", () => { 
    elementExists('.MuiTableContainer-root').then(exists => exists===null);
});
