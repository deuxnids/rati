(function(){
  var app = angular.module('model', []);

  app.controller("ModelController", function(){
    this.name="asa";
    this.project={};
    this.fields=[];
    this.fields.push({name:"dBubble", descrpiton:"Diameter of one of the bubble"});
    this.fields.push({name:"nx", descrpiton:"number of cells in x-direction"});

  });

})();

