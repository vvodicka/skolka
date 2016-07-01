'use strict';

describe('Controller: DunajskaluznapricelistCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var DunajskaluznapricelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DunajskaluznapricelistCtrl = $controller('DunajskaluznapricelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
