module.exports = {
    url: 'https://nightwatchjs.org/',
    elements: {
      body: {
        selector: "body"
      },  
      getStarLink: {
        selector: "//a[text()='Get started']",
        locateStrategy: 'xpath'
      },
      docSearchButton: {
        selector: 'span[class="DocSearch-Button-Placeholder"]'
      },
      docSearchInput: {
        selector: 'input[class="DocSearch-Input"]'
      },
      docSearchFirstItem: {
        selector: 'li[id="docsearch-item-0"]'
      },
      apiHeader: {
        selector: "a[href*='org/api/']"
      },
      blogHeader: {
        selector: "a.header-links[href*='/blog/']"
      },
      addressText: {
        selector: "p[class='address']"
      }
    }
  };
  