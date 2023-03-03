module.exports = {
    beforeEach: function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
        .navigate()
        .waitForElementVisible('@body')
        .click('@blogMenu');
    },
    'Subscription with json data' : function(browser) {
        var blog = browser.page.blogpage();
        var blogTitle=blog.getText("@headerTitle");
        blog.assert.textContains("@headerTitle","Digital Transformation Blog")
        blog.fillUsingJson()
        browser.page.mainpage().click('@aboutMenu');
        var about= browser.page.aboutpage();
        about
        .assert.textContains("@diVece", "Giancarlo Di Vece") 
        .assert.textContains("@eduardo", "Eduardo Arias") 
        .assert.textContains("@miranda", "Ignacio Miranda") 
        .assert.textContains("@huerta", "Diego Huerta") 
        browser.end();
    }
}
