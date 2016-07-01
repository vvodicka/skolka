'use strict';

describe('Controller: DunajskaluznadailyscheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var DunajskaluznadailyscheduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DunajskaluznadailyscheduleCtrl = $controller('DunajskaluznadailyscheduleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
