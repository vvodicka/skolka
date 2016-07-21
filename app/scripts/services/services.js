/**
 * Created by vladislav.vodicka on 7. 7. 2016.
 */
angular.module('services', [])

    .factory('Gallery', function ($http, IMAGES_URL) {

        var services = {};

        services.getFolderContents = function (folderName) {
            return $http.get("/skolka-api/folder/" + folderName).then(function (response) {
                var images = [];
                response.data.map(function(file) {
                    if(isImage("/skolka-api/folder/" + folderName + "/" + file)) {
                        images.push(file);
                    }
                });
                return images;
            });
        };

        return services;
    });

function isImage(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|JPG|JPEG)$/) != null);
}