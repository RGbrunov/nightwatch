const fillSubscribe = {
    fillUsingJson: function () {
        const values = getData().searchValues;
        for (var value in values){
        this
        .setValue('@subscribeField', values[value])
        }
    }
};
function getData() {
    return require('../../dataExternal/searchValues'); // Using the correct path is important
};
module.exports = {
    url: 'https://www.unosquare.com/blog/',
    commands: [fillSubscribe],
    elements: {
      subscribeField: {
        selector: 'input[name="email"]'
      },
      headerTitle: {
        selector: 'h1.elementor-heading-title.elementor-size-default'
      }
    }
};
