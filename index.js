function iterativeLog(array) {
  function logIndex (element, index, array) {
    console.log(`${index}: ${element}`)
  }
  array.forEach(logIndex)
}

function iterate(callback) {
  var array = [1, 2, 3]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
