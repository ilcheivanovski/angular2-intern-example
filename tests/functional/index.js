define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'index',

        title_match: function () {
            return this.remote
                .get(require.toUrl('http://localhost:3000/#/'))
                .getPageTitle()
                .then(function (title) {
                    console.log('Page loaded: ' + title);
                    assert.equal(title, 'Angular2 Webpack Starter', 'Title should be Angular2 Webpack Starter');
                });
        },

        'simple form': function () {
            return this.remote
                .get(require.toUrl('http://localhost:3000/#/'))               
                .findById('nameField')
                    .click()
                    .type('ilche@sourcico.com')
                    .sleep(5000)    
                    .end()    
                .findById('submitButton')
                    .click()                   
                    .end()                
                .findById('nameField')
                    .getVisibleText().then(function (text) {
                        console.log("Ilche" + text);
                        assert.strictEqual(text, '');
                    })
                    .end()      
        }
    });

});