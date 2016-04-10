'use strict';

describe('Controller: HealthyKindergartenCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var HealthyKindergartenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HealthyKindergartenCtrl = $controller('HealthyKindergartenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
