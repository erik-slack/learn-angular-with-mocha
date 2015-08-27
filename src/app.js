var app = angular.module('app', []);

app.controller('TodoController', function($scope){
  $scope.todos = [];

  $scope.addTodo = function(title, completed){
    if (typeof title !== 'string' || typeof completed !== 'boolean')
      throw new Error('Invalid parameters.');

    $scope.todos.push({
      title: title,
      completed: completed
    });
  };

  $scope.removeTodo = function(todo){
    return !!$scope.todos.splice($scope.todos.indexOf(todo), 1).length;
  };
});
