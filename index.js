const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (array) => {

  let win = array.find(function(obj){
     return obj.result === "W"
  })

  if(win){ //if there was a match for a W
    return win.year
  } else {
    undefined
  }
}
