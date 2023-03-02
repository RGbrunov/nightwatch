module.exports = {
    before : function(browser) {
      browser.globals.waitForConditionTimeout = 5000;
      browser.windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
    },
    'Demo test visible' : function(browser) {
      browser
      .waitForElementVisible("li a[href *= '/services/']")
      .assert.visible("li a[href *= '/services/']");
    },
    after : function(browser) {
      browser.end();
    }
};
