const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(object => {
    return object.result === 'W'
  })
  if (result)
    return result.year
  else
    return undefined
}
