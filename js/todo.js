(function(){
  var app = angular.module('marchethon', ['runner']);

  app.value="sas"
  app.controller("RaceController", function(){
    this.races = [
        {
          name:'Scenario 1', 
          done:true,
          start_time:null,
          stop_time:null},
        {
          name:'build an angular app', 
          done:false,
          start_time: null,
          stop_time:null}];
    this.arrivals = [];

    this.todoText;

    this.addTodo = function() {
      this.races.push({name: this.todoText, done:false, start_time:null});
      this.todoText = ""
    };

    this.startRace = function(race) {
      race.start_time= new Date();
    };
    this.stopRace = function(race) {
      race.stop_time= new Date();
    };
    this.addArrivalTime = function() {
      this.arrivals.push({arrival_time:new Date(), runner: null});
    };
    this.addRunnerToTime = function(arrival,runner_code, runnerCtrl){
      runnerCtrl.runners.forEach(function(runner){
        console.log(runner_code);
      })
      arrival.runner = runner_code; 

    };



  });

app.directive('todoTitle', function(){
 return {
  restrict: 'E',
  templateUrl: 'todo-title.html'
 };
});

})();



