

angular.module('guessApp', ['ui.bootstrap'])
.controller('guessCtrl',function($scope, Counter){
  console.log('guessCtrl activated!');
  $scope.counter = Counter.count;
  $scope.displayFirst = 10;
  $scope.displaySecond = 4;
/*
{
  firstImage
  secondImage
  firstName
  secondName
  firstCount
  secondCount
}
*/

/*
ToDo:

put in achievement
put in popnumber
put in other pages

EXTRA:---------
put in profile
---------------
*/
  $scope.storage = [];



  $scope.setBar = function()
  {
     var percentageFirst = 0;
      var percentageSecond = 0;

      var totalPops = $scope.displayFirst + $scope.displaySecond;

      percentageFirst = Math.round(($scope.displayFirst/totalPops) *100);
      console.log(percentageFirst);
      percentageSecond = Math.round(($scope.displaySecond/totalPops) *100);

      console.log(percentageSecond);
  $scope.stack(percentageFirst, percentageSecond);
  }



  $scope.increment = function(string){
    if(string === 'first'){
      $scope.displayFirst = Counter.increment($scope.displayFirst);
    }
    else if(string ==='second')
    {
      $scope.displaySecond = Counter.increment($scope.displaySecond);
    }
    var percentageFirst = 0;
    var percentageSecond = 0;

    var totalPops = $scope.displayFirst + $scope.displaySecond;

    percentageFirst = Math.round(($scope.displayFirst/totalPops) *100);
    console.log(percentageFirst);
    percentageSecond = Math.round(($scope.displaySecond/totalPops) *100);

    console.log(percentageSecond);

$scope.stack(percentageFirst, percentageSecond);

  };
//BAR HERE-------------------------------------------------------
    $scope.max = 200;

    $scope.stack = function(percentageFirst, percentageSecond) {

        $scope.stacked = [];
        var types = ['success', 'info'];
        var values = [percentageFirst , percentageSecond];
        for (var i = 0 ; i < types.length; i++) {
          $scope.stacked.push({
              value: values[i],
              type: types[i]
            });
        }
      };


//BAR HERE ----------------------------------------------------------------

$scope.initialize = function()
{
   $scope.setBar();
}


 $scope.initialize();
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
