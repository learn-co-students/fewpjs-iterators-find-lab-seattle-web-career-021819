const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let r = record.find( record => {
    return record.result === "W"
  })
  if (r !== undefined) {
    return r.year
  } else {
    return undefined
  }
}
