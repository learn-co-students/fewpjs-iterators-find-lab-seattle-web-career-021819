const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let result = arr.find(game => game["result"] === "W");
  if (result) {
    return result["year"];
  } else {
    return undefined;
  }
}
