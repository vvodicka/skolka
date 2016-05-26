'use strict';

describe('Controller: RuzinovregistrationCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var RuzinovregistrationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RuzinovregistrationCtrl = $controller('RuzinovregistrationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
