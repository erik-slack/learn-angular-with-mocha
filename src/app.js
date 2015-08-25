var app = angular.module('app', []);

app.controller('TodoController', function($scope){
  var todoList = [];

  $scope.getTodoList = function() {
    return todoList;
  };

  $scope.addTodo = function(title, completed){
    if (typeof title !== 'string' || typeof completed !== 'boolean')
      throw new Error('Invalid parameters.');

    todoList.push({
      title: title,
      completed: completed
    });
  };

  $scope.removeTodo = function(todo){
    return !!todoList.splice(todoList.indexOf(todo), 1).length;
  };
});
