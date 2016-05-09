'use strict';

describe('Controller: MontessoriCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var MontessoriCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MontessoriCtrl = $controller('MontessoriCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
