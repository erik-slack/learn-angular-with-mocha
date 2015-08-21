var expect = chai.expect;

describe('Todo App', function(){

  var scope, control;

  beforeEach(angular.mock.module('app'));
  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    control = $controller('TodoController', { $scope: scope });
  }));

  it('Must contain a TodoController', function(){
    expect(control).to.not.equal(undefined);
  });

  it('$scope.todosList: should be an array', function(){
    expect(scope.todosList instanceof Array).to.equal(true);
  });

  // needs id, title, completed
  it('should insert a new todo on enter at input text', function(){
    expect(scope.addTodo).to.be.a('function');
  });

});
