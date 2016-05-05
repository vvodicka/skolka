'use strict';

describe('Controller: OzCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var OzCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OzCtrl = $controller('OzCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
