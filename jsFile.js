/**
 * Created by CEO Sadi on 4/21/2015.
 */

var app = angular.module("myApp",["ngMaterial"]);

app.service("myService", function(){

   /*var ref = new Firebase("https://incandescent-heat-4502.firebaseio.com/");
    var syncObject = $firebaseArray(ref);*/
   var taskArr = [];
    this._addingTaskInService = function(task){
        taskArr.push(task);

        /*syncObject.$add({
            text: task
        });*/
    };
    this.getAllTask = function(){
        return taskArr;

    };

});





app.controller("myCont1", function($scope,myService){

        //$scope.task={};
      $scope.addingTask = function(){
         var task = {
             text : $scope.task_text
         };

          myService._addingTaskInService(task);
     };

});
app.controller("myCont2", function($scope,myService){
    $scope.myAllTask = myService.getAllTask();


});
