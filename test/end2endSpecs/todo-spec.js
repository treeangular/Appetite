describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {

        browser.get('http://localhost:8100/templates/authentication.html');

        expect(element(by.binding('user.Email')).getText()).toEqual("arcayne !");
        expect(element(by.binding('user.Password')).getText()).toEqual("123123 !");
//        element(by.model('Email')).sendKeys('testUser');
//        element(by.model('Password')).sendKeys('123123');

//        element(by.model('user.Email')).sendKeys('testUser');
//        element(by.model('user.Password')).sendKeys('123123');
        //element(by.id.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
});