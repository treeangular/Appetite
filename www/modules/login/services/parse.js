/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 23/08/14
 * Time: 11:42
 * To change this template use File | Settings | File Templates.
 */

angular.module('authentication')
/**
 * Parse Service com as a back-end for the application.
 */
    .factory('Parse', function ($q, $rootScope) {

        var signIn = function signIn(email, password)
        {
            var deferred = $q.defer();

            Parse.User.logIn(email.toLowerCase(), password).then(function(signedInUser){
                console.log("Successfully signed in user: " + signedInUser.get("email"));
                deferred.resolve(signedInUser);
            }, function(error){
                deferred.reject("error signing in.." + error);
            });

            return deferred.promise;
        };

        var signUp = function signUp(email, password)
        {
            var user = new Parse.User();
            var deferred = $q.defer();
            console.log("trying to register " + email);
            user.set("username", email);
            user.set("password", password);
            user.set("email", email);

            user.signUp(user).then(function(registeredUser){
                console.log("Successfully registered user: " + registeredUser.get("email"));
                deferred.resolve(registeredUser)  ;
            }, function(error){
                deferred.reject("error signing up .." + error);
            });

            return deferred.promise;
        };


        var parseService = {
            name: "Parse",
            signIn: signIn,
            signUp: signUp
        };

        return parseService;

    });
