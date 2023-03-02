module.exports = {
    'test pages validation' : function(browser) {
    var unosquare = browser.page.mainpage();

    unosquare
    .navigate()
    .waitForElementVisible('@body')
    .click('@servicesMenu')
    .assert.titleEquals('Services - Unosquare')
    .assert.titleMatches('Unosquare')
    .assert.urlContains('www.unosquare.com')
    .assert.urlEquals('https://www.unosquare.com/')
    browser.end();
    }
}