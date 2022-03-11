
angular.module("toDoList", [])

  .controller("toDoListCtrl", ['$scope',
    function($scope) {
      //A model holding tasks
      $scope.taskList = [
        
      ];
      let id=0;
    //Function for adding task to the task list
      $scope.addTask = function(task) {
        console.log(task)

        if($scope.taskList.find(p => p.taskname === task)) {
       alert("Task should not be repeated")
       return;
    };
        //I'm pushing a new task to the task list
        $scope.taskList.push({
          id:id,
          done: false,
          taskname: task,
          taskstatus: "NO",
        });
        id++;
      };
 
    }
  ]);