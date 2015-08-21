var expect = chai.expect;

describe('Todo App', function(){

  describe('#TodoController', function(){
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
    it('Should insert a new todo on enter at input text', function(){
      expect(scope.addTodo).to.be.a('function');
    });

    it('Should insert todo on todoList', function(){
      var lengAfter = 0;
      var lengBefore = scope.todosList.length;
      scope.addTodo({
        title: 'My new todo',
        completed: false
      });
      lengAfter = scope.todosList.length;
      expect(lengAfter - lengBefore).to.equal(1); // great! its added
    });
  });

});
