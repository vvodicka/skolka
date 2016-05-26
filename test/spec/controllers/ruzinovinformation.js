'use strict';

describe('Controller: RuzinovinformationCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var RuzinovinformationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RuzinovinformationCtrl = $controller('RuzinovinformationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
