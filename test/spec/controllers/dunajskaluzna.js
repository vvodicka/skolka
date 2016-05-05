'use strict';

describe('Controller: DunajskaluznaCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var DunajskaluznaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DunajskaluznaCtrl = $controller('DunajskaluznaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
