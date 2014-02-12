'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Статьи',
        'link': 'articles'
    }, {
        'title': 'Создать новую Статью',
        'link': 'articles/create'
    }];
    
    $scope.isCollapsed = false;
}]);