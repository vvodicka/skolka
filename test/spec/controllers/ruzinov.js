'use strict';

describe('Controller: RuzinovCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var RuzinovCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RuzinovCtrl = $controller('RuzinovCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
