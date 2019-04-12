const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i].result==='W'){
      return arr[i].year;
    }
  }
  return undefined;
}
