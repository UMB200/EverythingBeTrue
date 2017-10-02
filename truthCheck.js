function truthCheck(collection, pre) {
  // Is everyone being true?
  //looping through given collection 
  for(var i = 0; i < collection.length; i++){
    //if any of the argument is false
    if(!collection[i][pre]){
      //return all  false
      return false;
    }
    //othwerwise return true arguments
  }
  return true;
}