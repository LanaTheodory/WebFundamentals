//1
var arr = [-1,3,5,-5];

function makeitbig(){
for (var i = 0; i <arr.length; i++){
if(arr[i]>0){
arr[i] = "big";
}
}
return arr
}
makeitbig();
console.log(arr);


//2
var arr = [1,2,-3,0];
var max = arr[0];
var min = arr[0];


function ReturnPrint(){
  for(var i=0; i< arr.length; i++){
    if(arr[i]<min){
    min =arr[i];
    }
    if(arr[i] > max){
    max =arr[i];
    
    }
    
    }
  
  
console.log(min);

  return max;
}
ReturnPrint()

//3
var arr=[8,2,3,0];
var arr2=[];

function second(){
for(var i = 1; i<arr.length; i++){
console.log(arr[i]);
}
for(var i = 0; i<arr.length; i++){
   if(arr[i] %2 == 1){
   arr2.push(arr[i]);
   }
}

return arr2[0];
}

second();


//4
var arr=[1,2,3];


function double(){
for(var i = 0; i<arr.length; i++){
arr[i] *= 2;
}

return arr;

}
double();
console.log(arr);


//5
var arr=[1,4,5,-2,2];
var count=0;

function positive(){
for(var i = 0; i<arr.length; i++){
if(arr[i] > 0){
count++;
}
}
arr[arr.length-1] = count;
return arr;

}
positive();
console.log(arr);


//6
var arr=[2,4,6,1,3,5];


function evenodd(arr){
 for( var i=0; i < arr.length; i++ ){
 if(arr[i] % 2==0 && arr[i+1] % 2==0 && arr[i+2] % 2==0){
  console.log("even numbers");
 }
 
 if(arr[i] % 2==1 && arr[i+1] % 2==1 && arr[i+2] % 2==1){
  console.log("odd numbers");
 }

 }
}
 evenodd(arr);


//7
var arr=[1,2,3,4,5];


function evenodd(arr){
 for( var i=1; i < arr.length; i+=2 ){
  arr[i]+=1
 }
 for( var i=0; i < arr.length; i++ ){
 console.log(arr[i]);
 
 }
 return arr;
}
 evenodd(arr);

//8

function lengthstring(arr){

    for(var i = arr.length -1; i > 0 ;i--){
    
     arr[i]= arr[i - 1].length;
    }
    return arr;
    }
    console.log(lengthstring(["hello","awsome","dojo"]));


//9
var arr = [1,2,3];
var  arrnew=[];

function addseven(){
for( var i = 0; i<arr.length; i++){
 arrnew.push(arr[i]+7);
}
return arrnew;
}

addseven();
console.log(arrnew);

//10
var arr = [3,1,6,4,2];

function reversearr(){
arr.reverse();

}
reversearr()
console.log(arr);


//11
var arr = [1,-3,5];
var newarr=[];

function negative(){
 for(var i = 0; i<arr.length; i++){
 if(arr[i] > 0){
 arr[i] *= -1;
 }
 }
}
negative()
console.log(arr);

//12


function hungry( arr){
    var arrnew = [];
     for(var i = 0; i<arr.length; i++){
     if(arr[i] == "food"){
     console.log("yummmy");
     arrnew.push(arr[i]);
     }
     }
     
     if(arrnew.length == 0){
     console.log("im hungry!!")
    } 
     
     return arr;
    }
    hungry( ["hungry", "food","food", "sleepy"]);


//13
function swapcenter(arr){
    var temp;
    for(var i = 0; i<arr.length / 2; i++){
    temp = arr[i];
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp;
   
    }
   console.log(arr);
   }
   swapcenter([1,2,3,4,5,6,7]);

//14
function scaleArray(arr, num){
    for(var i =0; i<arr.length; i++){
    arr[i] *= num
    }
    return arr
    }
    console.log(scaleArray([1,2,3], 3));
