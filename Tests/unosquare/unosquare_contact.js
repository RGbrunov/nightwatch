module.exports = {
    beforeEach: function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
        .navigate()
        .waitForElementVisible('@body')
        .click('@contactusMenu')
    },
    'It miss requirement data error message' : function(browser) {
        var contact = browser.page.contactuspage();
        contact
        .fillAndSubmit("Bruno Vasquez", "bruno@uno.com")
        .assert.textContains("@errorMessage", "Please complete this required field."); 
        browser.end();
    },
    'Email bad format error message ' : function(browser){
        var contact = browser.page.contactuspage();
        contact
        .fill("Bruno Vasquez", "badFormat")
        .assert.textContains("@errorMessage", "Email must be formatted correctly."); 
        browser.end();
     }
}
