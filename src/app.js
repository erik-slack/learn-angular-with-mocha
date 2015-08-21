var app = angular.module('app', []);

app.controller('TodoController', function($scope){
  $scope.todoList = [];

  $scope.addTodo = function(title, completed){
    if (typeof title !== 'string' || typeof completed !== 'boolean') {
      throw new Error('Invalid parameters.');
    }
    
    $scope.todoList.push({
      title: title,
      completed: completed
    });
  };
});
