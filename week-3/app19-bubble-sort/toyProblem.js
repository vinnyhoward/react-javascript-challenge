let bubblesortOnce = intArr => {
  for(var i = 0; i < intArr.length; i++){
     if(intArr[i] > intArr[i + 1]){
       let temp = intArr[i]
      intArr[i] = intArr[i+ 1]
      intArr[i+ 1] = temp
    }
  }
  return intArr
}