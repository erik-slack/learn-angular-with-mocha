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

  it('Must contain a number scope ($scope.number) equals to 3', function(){
    expect(scope.number).to.equal(3);
  });

});
