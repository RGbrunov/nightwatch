module.exports = {
    'It miss requirement data error message' : function(browser) {
    var unosquare = browser.page.mainpage();
    var contact = browser.page.contactuspage();
    unosquare
    .navigate()
    .waitForElementVisible('@body')
    .click('@contactusMenu')
    contact
    .setValue('@fisrtNameField', "Bruno Vasquez")
    .setValue('@emailField', "bruno@uno.com")
    .click('@submitButton')
    .assert.textContains("@errorMessage", "Please complete this required field."); 
    browser.end();
    },
    'Email bad format error message ' : function(browser){
        var unosquare = browser.page.mainpage();
        var contact = browser.page.contactuspage();
        unosquare
        .navigate()
        .waitForElementVisible('@body')
        .click('@contactusMenu')
        contact
        .setValue('@fisrtNameField', "Bruno Vasquez")
        .setValue('@emailField', "badFormat")
        .assert.textContains("@errorMessage", "Email must be formatted correctly."); 
        browser.end();
     }
}