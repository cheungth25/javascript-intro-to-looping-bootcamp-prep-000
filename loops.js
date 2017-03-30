function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array[i] = `I am ${i} strange loop.`
  }
  return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(`${--number}`)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.length -= 1
  } while ( array.length > 0 && maybeTrue() )
  return array
}