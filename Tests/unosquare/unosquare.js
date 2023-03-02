module.exports = {
    before : function(browser) {
      browser.globals.waitForConditionTimeout = 5000;
      browser.windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
    },
     'Demo test attributeContains' : function(browser) {
      browser
      .assert.attributeContains("li a[href *= '/services/']", 'class', 'nav')
    },
    after : function(browser) {
      browser.end();
    }
  };
