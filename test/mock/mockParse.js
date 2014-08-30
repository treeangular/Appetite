/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 23/08/14
 * Time: 17:33
 * To change this template use File | Settings | File Templates.
 */

angular.module('MockParse', [])
/**
 * Parse Service
 * Use Parse.com as a back-end for the application.
 */
    .factory('MockParseService', function () {

        // Some fake testing data
        var friends = [
            { id: 0, name: 'Scruff McGruff' },
            { id: 1, name: 'G.I. Joe' },
            { id: 2, name: 'Miss Frizzle' },
            { id: 3, name: 'Ash Ketchum' }
        ];

        return {
            getFriendDetail: function(friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }


    });
