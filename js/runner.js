(function(){
  var app = angular.module('runner', []);

  app.controller("RunnerController", function(){
    this.runners=[{ name:"runner_name", code:"runner_code", race:"runner_race", stop_time:"runner_stop_time" },
                  { name:"runner_name", code:1234, race:"runner_race", stop_time:"runner_stop_time" },
                  { name:"runner_name", code:3456, race:"runner_race", stop_time:"runner_stop_time" }];

  });


})();



