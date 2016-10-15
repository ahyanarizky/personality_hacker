var g = "1970/12/15"
z = g.match(/\d+/g)
var x = 1;
for (var i = 0; i < z.length; i++){ //creating pair
  x *= z[i]
}

y = x*365*2466*33 //random number generator

v = y.toString().match(/\d{2}/g) //take every pair number
var arr = []
j = 0
while (arr.length < 5) {
  if (v[j] > 25 && v[j] < 95){
  arr.push(v[j])
  j+=1
} else {
  j+=1
  }
  if (j === v.length){
    j = 0
  }
}
console.log(arr);
console.log(v);
