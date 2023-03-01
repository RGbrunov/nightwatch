module.exports = {
    // 'Demo test unosquare' : function(browser) {
    //   browser
    //   .windowMaximize()
    //   .url('https://www.unosquare.com')
    //   .waitForElementVisible('body')
    //   .end();
    // },
    // 'Demo test verify' : function(browser) {
    //   browser
    //   .windowMaximize()
    //   .url('https://www.unosquare.com')
    //   .waitForElementVisible('body')
    //   .verify.visible('xxxx')
    //   .url('https://www.google.com')
    //   .verify.visible('.non_existing')
    //   .url('https://www.amazon.com')
    //   .end();
    // },
    // 'Demo test attributeContains' : function(browser) {
    //   browser
    //   .windowMaximize()
    //   .url('https://www.unosquare.com')
    //   .waitForElementVisible('body')
    //   .assert.attributeContains("li a[href *= '/services/']", 'class', 'nav')
    //   .end();
    // } ,
    // 'Demo test equals' : function(browser) {
    //   browser
    //   .windowMaximize()
    //   .url('https://www.unosquare.com')
    //   .waitForElementVisible('body')
    //   .assert.attributeContains("li a[href *= '/services/']", 'class', 'nav')
    //   .assert.attributeEquals("li a[href *= '/services/']", 'class', 'ekit-menu-nav-link')
    //   .end();
    // }
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
     'Demo test equals' : function(browser) {
      browser
      .assert.attributeEquals("li a[href *= '/services/']", 'class', 'ekit-menu-nav-link')
    },
    'Demo test containsText' : function(browser) {
      browser
      .waitForElementVisible("li a[href *= '/services/']")
      .assert.textContains("li a[href *= '/services/']", "Services"); 
    },
    'Demo test cssProperty' : function(browser) {
      browser
      .assert.cssProperty("li a[href *= '/about-us']", 'display', 'flex')
      .assert.cssProperty("li a[href *= '/about-us']", 'font-size', '15px')
      .assert.not.cssProperty("li a[href *= '/about-us']", 'font-size', '12px');
    },
    'Demo test title' : function(browser) {   
      browser
      .verify.titleEquals('Unosquare - Nearshore Software Engineers For Your Digital Transformation - Unosquare')
      .verify.titleMatches('Unosquare');
    },
    'Demo test url' : function(browser) {   
      browser
      .verify.urlContains('www.unosquare.com')
      .verify.urlEquals('https://www.unosquare.com/');
    },
    'Demo test visible' : function(browser) {
      browser
      .waitForElementVisible("li a[href *= '/services/']")
      .assert.visible("li a[href *= '/services/']");
    },
    'Demo test value' : function(browser) {
      browser
      .url('https://www.unosquare.com/contact-us/')
      .waitForElementVisible('input[name="firstname"]')
      .assert.valueContains('input[name="firstname"]', '')
      .assert.valueEquals('input[name="firstname"]', '');
    },
    after : function(browser) {
      browser.end();
    }
  };
