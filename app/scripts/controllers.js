/**
 * Created with JetBrains WebStorm.
 * User: Vladimir
 * Date: 22.06.13
 * Time: 18:26
 * To change this template use File | Settings | File Templates.
 */

function SamplesListController($scope, Chapters) {
    $scope.chapters = Chapters.query();
    $scope.menuState = {show: true};

    $scope.selectChapter = function(chapter) {
        if ($scope.selectedChapter == chapter) {
            $scope.selectedChapter = -1;
        } else {
            $scope.selectedChapter = chapter;
        }
    };
}

var dataModule = angular.module('DataModule', []);

// Set up the service factory to create our Chapters interface to the
// server-side database
dataModule.factory('Chapters', function() {
    var chapters = {};

    chapters.query = function() {
        // In real apps, we'd pull this data from the server...

        const samples1 = [
            {name: 'Hello World Javascript', fileName: 'hello-world-js', pageNumber: 2},
            {name: 'Hello Dynamic', fileName: 'HelloDynamic', pageNumber: 4},
            {name: 'Order Form', fileName: 'order-form', pageNumber: 6}
        ];

        const samples2 = [
            {name: '1. Data Binding', fileName: '1.dataBinding', pageNumber: 13},
            {name: '2. Data Binding - Proper Form', fileName: '2.dataBinding - proper form', pageNumber: 14},
            {name: 'Startup', fileName: 'startup', pageNumber: 16},
            {name: 'Startup Watch', fileName: 'startup-watch', pageNumber: 17},
            {name: 'Startup 2', fileName: 'startup2', pageNumber: 18},
            {name: 'Startup 3', fileName: 'startup3', pageNumber: 18},
            {name: 'Students List', fileName: 'studentsList', pageNumber: 21},
            {name: 'Album List', fileName: 'albumList', pageNumber: 22},
            {name: 'Death Ray Menu', fileName: 'deathRayMenu', pageNumber: 23},
            {name: 'Errors and Warnings', fileName: 'errorsAndWarnings', pageNumber: 25},
            {name: 'Selected Row', fileName: 'selectedRow', pageNumber: 26},
            {name: 'Set Scope From Expression', fileName: 'setScopeFromExpression', pageNumber: 28},
            {name: 'Controller Nesting', fileName: 'controllerNesting', pageNumber: 28},
            {name: 'Controller Nesting Modify Parent', fileName: 'controllerNestingModifyParent', pageNumber: 28},
            {name: 'Order Discount Watch', fileName: 'orderDiscountWatch', pageNumber: 30},
            {name: 'Order Discount Watch - Corrected', fileName: 'orderDiscountWatch-corrected', pageNumber: 32},
            {name: 'Order Discount Watch - Corrected 2', fileName: 'orderDiscountWatch-corrected2', pageNumber: 32},
            {name: 'Items Service Module', fileName: 'itemsServiceModule', pageNumber: 35},
            {name: 'Title Case Filter', fileName: 'titleCaseFilter', pageNumber: 37},
            {name: 'aMail', fileName: 'aMail/index', pageNumber: 39},
            {name: 'Talking To Servers', fileName: 'talkingToServers/index', pageNumber: 42},
            {name: 'Focus Directive', fileName: 'focusDirective', pageNumber: 43},
            {name: 'Form Validation', fileName: 'formValidation', pageNumber: 45}
        ];

        const samples3 = [
            {name: 'Web-Server ', fileName: 'sample-app/app/index', pageNumber: 51}
        ];

        const samples4 = [
        ];

        const samples5 = [
        ];

        const samples6 = [
        ];

        const samples7 = [
        ];

        const samples8 = [
        ];

        return [
            {samples: samples1, name: 'Chapter 1. Introduction to AngularJS'},
            {samples: samples2, name: 'Chapter 2. Anatomy of an AngularJS Application'},
            {samples: samples3, name: 'Chapter 3. Developing in AngularJS'},
            {samples: samples4, name: 'Chapter 4. Analyzing an AngularJS App'},
            {samples: samples5, name: 'Chapter 5. Communicating with Servers'},
            {samples: samples6, name: 'Chapter 6. Directives'},
            {samples: samples7, name: 'Chapter 7. Other Concerns'},
            {samples: samples8, name: 'Chapter 8. Cheatsheet and Recipes'}
        ];
    };
    return chapters;
});
