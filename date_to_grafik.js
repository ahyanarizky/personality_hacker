'use strict'
var g = '1991/01/05'
var z = g.match(/\d+/g)
var x = 1
for (var i = 0; i < z.length; i++) {  // creating pair
  x *= z[i]
}

var y = x * 365 * 2466 * 33 // random number generator
var v = y.toString().match(/\d{2}/g) // take every pair number
var arr = []
var j = 0
while (arr.length < 5) {
  if (v[j] > 25 && v[j] < 95) {
    arr.push(v[j])
    j += 1
  } else {
    j += 1
  }
  if (j === v.length) {
    j = 0
  }
}

console.log(arr) // grafik result
console.log(v) // ?
