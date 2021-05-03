function sigma(num){
   var sum = 0;
   for(var i =1; i<=num; i++){
       sum+= i;
   }
   return sum;
}

console.log(sigma(3));

//2
function Factorial(num){
    var sum = 1;
    for(var i =1; i<=num; i++){
        sum*= i;
    }
    return sum;
 }
 
 console.log(Factorial(3));

 //3
 function fibonacci(index){
    var arr=[0,1];
     for(var i =2; i<=index; i++){
      arr.push(arr[i-2]+arr[i-1]);
     }
    return arr;
    }
    console.log(fibonacci(6));

 //4


 function secondtolast(arr){
    if( arr.length < 2){
     return null
    }
     return arr[arr.length-2];
    }
    secondtolast( [42, true, 4, "Liam", 7]);

    //5
    
function secondtolast(arr,n){

    if( arr.length < 2){
     return null
    }
     return arr[arr.length-n];
    }
    console.log(secondtolast( [1,2,3,4,5], 3));

    //6
    
function secondmax(arr){
    var arrmax = [];
    var max = arr[0];
    if( arr.length < 2){
     return null
    }
    
    for(var i = 0; i< arr.length; i++){
    if(max < arr[i]){
    max = arr[i];
    arrmax.push(max);
    }
    }
    console.log(arrmax);
     return arrmax[1];
    }
    console.log(secondmax( [4,5,7,4,6]));

    //7
    function doubletrouble(arr){
        var newarr=[];
        for(var i =0; i<arr.length; i++){
        newarr.push(arr[i]);
        newarr.push(arr[i]);
        
        }
        return newarr;
        }
        console.log(doubletrouble([1,2,3,4]));