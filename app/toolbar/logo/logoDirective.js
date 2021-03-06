angular.module("logoDirective", [])
    .directive("logoView", function($state) {

        return {

            restrict: "EA",
            replace: true,

            templateUrl: "app/toolbar/logo/logoView.html",

            controller: function($scope) {

                $scope.openMainWindow = function() {
                    $state.go("home");
                }
            }

        }

    });