'use strict';

describe('Controller: PricelistCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var PricelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PricelistCtrl = $controller('PricelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
