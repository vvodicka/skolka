'use strict';

describe('Controller: DunajskaluznaspacesCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var DunajskaluznaspacesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DunajskaluznaspacesCtrl = $controller('DunajskaluznaspacesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
