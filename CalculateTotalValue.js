var TotalValue = function(){
  this.getValue = function (a){
    var result = 0;
    for(var i=0; i < a.length; i++){
      if(a[i]=="pillow"){
        result += 5;
      }
      else if(a[i]=="bed"){
        result += 20;
      }
    }
    return result;
  };
};
