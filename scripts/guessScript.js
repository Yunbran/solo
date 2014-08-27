

angular.module('guessApp', ['ui.bootstrap', 'ngFx'])
.controller('guessCtrl',function($scope, $timeout, Counter){
  console.log('guessCtrl activated!');
  $scope.counter = Counter.count;
  $scope.displayFirst = 10;
  $scope.displaySecond = 4;
  $scope.toggler = false;
  $scope.togglerSecond = false;
  $scope.togglerThird = false;
  $scope.achievement = '';
  $scope.popper = false;
  $scope.personalCounter = 0;
  $scope.togglerPop = false;

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
      if($scope.personalCounter === 0){
    $scope.toggler = !$scope.toggler ;
    $scope.achievement =   'Achievement! ---Vanilla Supporter---';
  }
  else if($scope.personalCounter === 34) {
    $scope.togglerSecond = !$scope.togglerSecond;

  } else if($scope.personalCounter === 39) {
    $scope.togglerThird = !$scope.togglerThird;
  }

    if(string === 'first'){
      $scope.displayFirst = Counter.increment($scope.displayFirst);
      $scope.togglerPop = true;

      $timeout(function(){
      $scope.togglerPop = false;
      $scope.$apply();
      console.log('triggered');
    }, 930);


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
  $scope.personalCounter++;
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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



$scope.initialize = function()
{
   $scope.setBar();
   var repeat = function(){

  var temp = Math.round(getRandomArbitrary(1,2));
  console.log(temp);

  if(temp === 1)
  {
      $scope.displayFirst = Counter.increment($scope.displayFirst);
  }
  else
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




   $timeout(function(){
    repeat();
   }, getRandomArbitrary(100,1300));
 }
 repeat();

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
