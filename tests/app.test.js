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

    it('#todoList: should be an array', function(){
      expect(scope.todoList instanceof Array).to.equal(true);
    });

    // needs id, title, completed
    it('#addTodo: Should verify the addTodo type', function(){
      expect(scope.addTodo).to.be.a('function');
    });

    it('#addTodo: Should validate the parameters', function(){
      var addTodo = scope.addTodo;
      expect(addTodo.bind(addTodo, {}, false)).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, false, 'false')).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, 'false', 'false')).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, 1, true)).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, 'Test title', 1)).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, [], true)).to.throw('Invalid parameters.');
      expect(addTodo.bind(addTodo, [], [true])).to.throw('Invalid parameters.');
    });

    it('#addTodo: Should insert todo on todoList', function(){
      var lengAfter = 0;
      var lengBefore = scope.todoList.length;
      scope.addTodo('My todo test', false);
      lengAfter = scope.todoList.length;
      expect(lengAfter - lengBefore).to.equal(1); // great! its added
    });

    it('#removeTodo: Should validate if the removeTodo method is defined.', function(){
      expect(scope.removeTodo).to.be.a('function');
    });

    it('#removeTodo: Should remove todo on todoList', function(){
      var lengBefore = scope.todoList.length;
      var lengAfter;
      var todo;

      scope.addTodo('Test todo', false);

      lengAfter = scope.todoList.length;
      todo = scope.todoList[lengAfter - 1]; // Last todo added
      scope.removeTodo(todo);
      expect(lengBefore - lengAfter).to.equal(-1);
    });

    it('#editTodo: Should be exeist edit todo method', function(){
      expect(scope.editTodo).to.be.a('function');
    });
    
  });
});
