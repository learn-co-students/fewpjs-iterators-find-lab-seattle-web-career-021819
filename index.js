const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let game = array.find(obj => obj.result === "W")
  if (game) {return game.year}
}
