/**
 * Created with JetBrains WebStorm.
 * User: Javito
 * Date: 23/08/14
 * Time: 11:40
 * To change this template use File | Settings | File Templates.
 */

//We cannot use angular.module('appetite.services', []) because
//Beware that using angular.module('myModule', [])
// will create the module myModule and overwrite any existing module named myModule.
// Use angular.module('myModule') to retrieve an existing module.

angular.module('demo')

    .factory('MockFriends', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var friends = [
            { id: 0, name: 'Scruff McGruff' },
            { id: 1, name: 'G.I. Joe' },
            { id: 2, name: 'Miss Frizzle' },
            { id: 3, name: 'Ash Ketchum' }
        ];

        return {
            all: function() {
                return friends;
            },
            get: function(friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }
    });