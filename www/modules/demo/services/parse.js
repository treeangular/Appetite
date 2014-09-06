/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 23/08/14
 * Time: 11:42
 * To change this template use File | Settings | File Templates.
 */

angular.module('demo')
/**
 * Parse Service com as a back-end for the application.
 */
    .factory('Parse', function ($q, $rootScope) {

        var FriendDetail = Parse.Object.extend("FriendDetail");

        var getFriendDetails = function getFriendDetails(friendId)
        {
            var deferred = $q.defer();
            console.log("getting friend details of " + friendId);
            var query = new Parse.Query(FriendDetail);
            query.equalTo("Name",friendId);

            query.first().then(function(friendDetail){
                  deferred.resolve(friendDetail);

            }, function(error)
            {
                deferred.reject("Error getFriendDetails");
            });

            return deferred.promise;
        };

        var parseService = {
            name: "Parse",

            getFriendDetail: getFriendDetails



        };

        return parseService;

    });
