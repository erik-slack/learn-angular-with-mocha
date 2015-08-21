var app = angular.module('app', []);

app.controller('TodoController', function($scope){
  $scope.todosList = [];

  $scope.addTodo = function(title, completed){
    if (typeof title !== 'boolean' && typeof completed !== 'string') {
      throw new Error('Invalid params');
    }
    
  };
});
