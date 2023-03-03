module.exports = {
    'Amazon Test' : function(browser) {
    var amazon = browser.page.homepage();
    amazon
    .navigate()
    .waitForElementVisible('@body')
    .setValue('@searchTextBox', 'Samsung Galaxy Note 20')
    .click('@searchSubmitButton')
    .assert.textContains("@itemNameText", "Samsung Electronics Galaxy Note 20")
    var price= amazon.getText("@itemPriceText");
    amazon.click("@itemNameText")
    var newPrice= amazon.getText("@newPrice");
    amazon
    .assert.equal(newPrice, price)
    .click("@addToCart")
    .waitForElementVisible("@cart")
    .click("@cart")
    var cartProductPrice = amazon.getText("@cartProductPrice");
    amazon
    .assert.equal(cartProductPrice, price)
    .click("@delete")
    browser.end();
    }
}
