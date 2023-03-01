module.exports = {
    before : function(browser) {
      browser.globals.waitForConditionTimeout = 5000;
      browser.windowMaximize()
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
    },
    'Demo test value' : function(browser) {
      browser
      .click('xpath', "//a[text()='Get started']")
      .waitForElementVisible('span[class="DocSearch-Button-Placeholder"]')
      .click('span[class="DocSearch-Button-Placeholder"]')
      .assert.valueEquals('input[class="DocSearch-Input"]', '')
      .setValue('input[class="DocSearch-Input"]', 'Asserts')
      .click('li[id="docsearch-item-0"]')
      .assert.attributeContains("a[href*='org/api/']", 'class', 'regular16px neutral-white-color header-links')
      .assert.textContains("a[href*='org/api/']", "API")
      .click("a.header-links[href*='/blog/']")
      .getLocationInView("p[class='address']")
      .assert.textContains("p[class='address']", "Nightwatch.js was initially created in Oslo, Norway by")
    },
    after : function(browser) {
      browser.end();
    }
}