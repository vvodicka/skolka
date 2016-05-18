'use strict';

describe('Controller: HealthykindergartenCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var HealthykindergartenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HealthykindergartenCtrl = $controller('HealthykindergartenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
