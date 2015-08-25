var expect = chai.expect;

describe('Todo App', function(){

  describe('#TodoController', function(){
    var scope, control;

    beforeEach(angular.mock.module('app'));
    beforeEach(inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      control = $controller('TodoController', { $scope: scope });
    }));

    it('Must contain a TodoController.', function(){
      expect(control).to.exist;
    });

    it('#todoList: should be an array.', function(){
      expect(scope.getTodoList()).instanceof(Array);
    });

    it('#addTodo: Should insert todo on todoList.', function(){
      var lengAfter = 0;
      var lengBefore = scope.getTodoList().length;
      scope.addTodo('My todo test', false);
      lengAfter = scope.getTodoList().length;
      expect(lengAfter - lengBefore).to.equal(1); // great! its added
    });

    // needs id, title, completed
    it('#addTodo: Should validate the parameters.', function(){
      var addTodo = scope.addTodo;
      expect(addTodo.bind(addTodo, {}, false)).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, false, 'false')).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, 'false', 'false')).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, 1, true)).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, 'Test title', 1)).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, [], true)).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, [], [true])).to.throw('Invalid parameters.');
    });

    it('#removeTodo: Should remove todo on todoList.', function(){
      var lengBefore = scope.getTodoList().length;
      var lengAfter;
      var todo;

      scope.addTodo('Test todo', false);

      lengAfter = scope.getTodoList().length;
      todo = scope.getTodoList()[lengAfter - 1]; // Last todo added
      scope.removeTodo(todo);
      expect(lengBefore - lengAfter).to.equal(-1);
    });

    it('#removeTodo: Should return true if removed successfull.', function(){
      scope.addTodo('New Todo', false);
      var todo = scope.getTodoList()[scope.getTodoList().length - 1];
      expect(scope.removeTodo(todo)).to.be.true;
      expect(scope.removeTodo({})).to.be.false;
      expect(scope.removeTodo(false)).to.be.false;
      expect(scope.removeTodo(true)).to.be.false;
      expect(scope.removeTodo(null)).to.be.false;
      expect(scope.removeTodo(0)).to.be.false;
    });

    //it('#editTodo: Should va')
  });
});
