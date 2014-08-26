

angular.module('guessApp', ['ui.bootstrap'])
.controller('guessCtrl',function($scope, Counter){
  console.log('guessCtrl activated!');
  $scope.cousnter = Counter.count;
  $scope.displayFirst = 14;
  $scope.displaySecond = 4;
  $scope.increment = function(string){
    if(string === 'first'){
      $scope.displayFirst = Counter.increment($scope.displayFirst);
    }
    else if(string ==='second')
    {
      $scope.displaySecond = Counter.increment($scope.displaySecond);
    }
//RANDOM BAR HERE-------------------------------------------------------
    $scope.max = 200;

    $scope.random = function() {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;

        if (value < 25) {
          type = 'success';
        } else if (value < 50) {
          type = 'info';
        } else if (value < 75) {
          type = 'warning';
        } else {
          type = 'danger';
        }

        $scope.showWarning = (type === 'danger' || type === 'warning');

        $scope.dynamic = value;
        $scope.type = type;
      };
    $scope.random();
    $scope.randomStacked = function() {
        $scope.stacked = [];
        var types = ['success', 'info', 'warning', 'danger'];

        for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
          var index = Math.floor((Math.random() * 4));
          $scope.stacked.push({
              value: Math.floor((Math.random() * 30) + 1),
              type: types[index]
            });
        }
      };
    $scope.randomStacked();

//RANDOM BAR HERE ----------------------------------------------------------------




  };


})
.factory('Counter',function(){

  var count = 14;

  var increment = function(num){
    num++;
    return num;
  };

  return {
    count: count,
    increment: increment
  };

});
