angular.module('appetite.services')
/**
 * Parse Service com as a back-end for the application.
 */
    .factory('Parse', function ($q, $rootScope) {
        //Create Object/Table names with capital first letter, following Parse guidelines.
        var FoodExperience = Parse.Object.extend("FoodExperience");
        var currentUser;

        var shareFoodExperience = function shareFoodExperience(fileToUpdate, foodExperience)
        {
            var deferred = $q.defer();

            //Set Food image
            var parseFile = new Parse.File("foodExperience.jpg", fileToUpdate);
            parseFile.save().then(function (uploadedParseFile) {

                    //Save book data with registration Id
                    var foodToSave = new FoodExperience();

                    foodToSave.set("price", foodExperience.title);
                    foodToSave.set("description", foodExperience.description);
                    foodToSave.set("image", uploadedParseFile._url);

                    deferred.resolve(true);
                },
                function (error) {
                    //navigator.notification.alert("Error:" + error, null);
                    deferred.reject("error saving food experience in.." + error);
                    console.log(error);

                });
        };

        var parseService = {
            name: "Parse",
            shareFoodExperience: shareFoodExperience,
            //this is the way of getting the user in a nice way
            currentUser: function() { return currentUser; }
        };

        return parseService;

    });
