/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 13/09/14
 * Time: 20:11
 * To change this template use File | Settings | File Templates.
 */

describe('appetite', function () {

});

describe('navigation tests', function() {
    beforeEach(function() {
        browser.get('/');
    });

    it('should be true', function() {
        expect(browser.location().url()).toBe('tab/dash');
    });
});
