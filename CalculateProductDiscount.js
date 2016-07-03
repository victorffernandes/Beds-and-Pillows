var ProductDiscount = function(){
  this.getDiscount = function(a){
    if(a.length >= 5){
      return 20/100;
    }else{
      return 1;
    }
  };
};
