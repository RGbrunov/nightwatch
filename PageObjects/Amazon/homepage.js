module.exports = {
    url: 'https://www.amazon.com',
    elements: {
      body: {
        selector: "body"
      },  
      searchTextBox: {
        selector: "#twotabsearchtextbox",
      },
      searchSubmitButton: {
        selector: "#nav-search-submit-button",
      },
      itemPriceText: {
        selector: ".a-price>span"
      },
      itemNameText: {
        selector: "span[class='a-size-medium a-color-base a-text-normal']"
      },
      newPrice: {
        selector: ".apexPriceToPay>span"
      },
      addToCart: {
        selector: "#add-to-cart-button"
      },
      cart:{
        selector:"a[data-csa-c-content-id='sw-gtc_CONTENT']"
      },
      cartProductPrice: {
        selector:".sc-product-price"
      },
      delete:{
        selector:".sc-action-delete"
      }
    }
};
