'use strict';

describe('Controller: DailyScheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('skolkaApp'));

  var DailyScheduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailyScheduleCtrl = $controller('DailyScheduleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
