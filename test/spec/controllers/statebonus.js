'use strict';

describe('Controller: StatebonusCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var StatebonusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatebonusCtrl = $controller('StatebonusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
