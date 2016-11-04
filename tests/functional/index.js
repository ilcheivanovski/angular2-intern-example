define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'index',

        'greeting form': function () {
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
                    .click()
                    .type('dimitar@sourcico.com')
                    .sleep(5000)                       
                    .end()    
                .findById('submitButton')
                    .click()                   
                    .end()
                 .findById('nameField')
                    .click()
                    .type('wekoslav@sourcico.com')                   
                    .sleep(5000)  
                    .end()    
                .findById('submitButton')
                    .click()                
                    .end()    
        }
    });

});