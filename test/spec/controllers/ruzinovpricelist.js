'use strict';

describe('Controller: RuzinovpricelistCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var RuzinovpricelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RuzinovpricelistCtrl = $controller('RuzinovpricelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
