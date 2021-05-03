 //1
 function adding(){
    var arr = [];
        for (var i = 1 ; i <= 255; i++) {
            arr.push( i );
            
           
        }
         console.log(arr);
         return arr;
    }
    adding();

    //

 //2   
var sum=0;
function SumEven(){
for (var i = 0; i<=100; i+=2)
sum +=i
return sum;
}
SumEven();
console.log(sum);
 //2550

 //3
 var sum=0;
function SumEven(){
for (var i = 1; i<=5000; i+=2)
sum +=i
return sum;
}
SumEven();
console.log(sum);
//6250000

//4
function itiration(){
    var arr= [1,5,4,-5,0];
    var sum = 0;
     for( var i=0; i< arr.length; i++){
     sum += arr[i];
     }
     console.log(sum);
     return sum;
    
    
    }
    itiration();

    // sum =5

//5
var arr = [-3,3,5,7];
var max=arr[0];


function MAX(){
for(var i = 0; i< arr.length; i++){
if( max < arr[i]){
max = arr[i];
}
}
console.log(max);
return max;
}

 MAX();

//mas = 7

//6
var arr =[1,3,5,7,20] ;
var sum=0;
var avg= 0;


function AVG(){
for(var i = 0; i< arr.length; i++){
sum +=  arr[i]; 
}
avg = sum / arr.length;
console.log(avg);
return avg;
}

AVG(); //avg 7.2

//7
var arr= [];
function ODD(){
for(var i = 1; i<50; i+=2){
arr.push(i);
}
console.log(arr);
return arr;
}
ODD();

//8
var arr = [1, 3, 5, 7];
var y=3;
var value=0;
 function greater(){
 for (var i = 0; i< arr.length; i++){
 if( arr[i] > y){
  value++;
 }
 }
 return value;
 }
 
 greater();
 console.log(value);

 //9
 var arr = [1,5,10,-2]; 

function square(){
for (var i = 0; i<arr.length; i++){
    arr[i] *= arr[i];
} 
return arr;
}
square();
console.log(arr);

//10
var arr = [1,5,10,-2] ; 

function negatives(){
for (var i = 0; i<arr.length; i++){
   if(arr[i] < 0){
   arr[i] =0;
   }
} 
return arr;
}
negatives();
console.log(arr);

//11
var arr = [1,5,10,-2];
var max=arr[0];
var min= arr[0];
var avg= 0;
var sum=0;

function MMA(){
for(var i = 0; i< arr.length; i++){
if( max < arr[i]){
max = arr[i];
}
if( min > arr[i]){
min = arr[i];
}
sum += arr[i];
}
avg = sum / arr.length;
var arrnew = [max , min, avg];
console.log(arrnew);
}


MMA();

//12
var arr =[1,5,10,-2];
var temp = 0;
function swap(){

temp = arr[arr.length-1]
 arr[arr.length-1] = arr[0];
 arr[0] = temp;
 return arr;

}
swap()
console.log(arr);

//13
var arr = [-1,-3,2];

function string(){
for (var i = 0; i <arr.length; i++){
if(arr[i]<0){
arr[i] = "dojo";
}
}
return arr
}
string();
console.log(arr);

    
