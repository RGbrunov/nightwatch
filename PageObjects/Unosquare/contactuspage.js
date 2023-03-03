const fillForm = {
    fillAndSubmit: function (name, email) {
        return this
            .fill(name, email)
            .click('@submitButton');
    },
    fill: function (name, email) {
        return this
        .setValue('@fisrtNameField', name)
        .setValue('@emailField', email)
    },
    fillUsingJson: function () {
        const form = getData();
        return this
        .setValue('@fisrtNameField', form.name)
        .setValue('@emailField', form.email)
    },
};
function getData() {
    return require('../../dataExternal/unosquareForm'); // Using the correct path is important
};
module.exports = {
    url: 'https://www.unosquare.com/contact-us/',
    commands: [fillForm],
    elements: {
      fisrtNameField: {
        selector: 'input[name="firstname"]'
      },
      emailField: {
        selector: 'input[name="email"]'
      },
      commentField: {
        selector: 'input[name="firstname"]'
      },
      submitButton: {
        selector: 'input[type="submit"]'
      },
      errorMessage: {
        selector: 'label[class="hs-error-msg"]'
      }
    }
};
