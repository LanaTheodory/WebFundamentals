var arr = [6,3,5,1,2,4];
var sum = 0;

for(var i=0; i< arr.length; i++){
    sum += arr[i];

    console.log("num" + arr[i]);
    console.log("sum" + sum);
} 
// "num6"
// "sum6"
// "num3"
// "sum9"
// "num5"
// "sum14"
// "num1"
// "sum15"
// "num2"
// "sum17"
// "num4"
// "sum21"

var arr = [6,3,5,1,2,4];

for(var i = 0; i <arr.length; i++){
   arr[i] *= i;

}
console.log(arr);
//[0, 3, 10, 3, 8, 20]