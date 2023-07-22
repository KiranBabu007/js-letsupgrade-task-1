function findMax(arr){
    var max=0;
 for(var i=0;i<arr.length;i++){
   if(arr[i]>max){
   max=arr[i] 
   }
}
   return max
}

var arr=[2,7,4,1,3,8,6]

console.log(findMax(arr))