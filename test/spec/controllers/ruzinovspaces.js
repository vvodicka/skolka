'use strict';

describe('Controller: RuzinovspacesCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var RuzinovspacesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RuzinovspacesCtrl = $controller('RuzinovspacesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
