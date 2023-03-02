module.exports = {
    'test pages validation' : function(browser) {
    var nightwatch = browser.page.landingpage();

    nightwatch
    .navigate()
    .waitForElementVisible('@body')
    .click('@getStarLink')
    .click('@docSearchButton')
    .assert.valueEquals('@docSearchInput', '')
    .setValue('@docSearchInput', 'Asserts')
    .click('@docSearchFirstItem')
    .assert.attributeContains('@apiHeader', 'class', 'regular16px neutral-white-color header-links')
    .assert.textContains('@apiHeader', "API")
    .click('@blogHeader')
    .getLocationInView('@addressText')
    .assert.textContains('@addressText', "Nightwatch.js was initially created in Oslo, Norway by")
    browser.end();
    }
}
