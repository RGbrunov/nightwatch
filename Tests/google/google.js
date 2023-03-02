module.exports = {
    before : function(browser) {
      browser.globals.waitForConditionTimeout = 5000;
      browser.windowMaximize()
      .url('https://www.google.com')
      .waitForElementVisible('body')
    },
     'Demo test attributeContains' : function(browser) {
      browser
      .assert.attributeContains('img[alt="Google"]', 'class', 'lnXdpd')
    },
    after : function(browser) {
      browser.end();
    }
};
