let arr =["Gian","Mary","Agnes","Vivian"];

function arrSort(arr) {
  arr.sort() ;
  return arr;
   
}
console.log(arrSort(arr))

function arrReverse(arr) {
arr.reverse();
return arr;
    
}
console.log(arrReverse(arr));

function printArray(arr1) {
  for (let i =0;i < arr1.length;i++){
    if(arr1[i] > 0){
      arr1[i] = "positive";
    }else if (arr1[i]< 0){
      arr1[i] = "negative";
    }else{
      arr1[i] = "zero";
    }
  }
  return arr1
}

let arr1 = [-2,4,-3,0,6,0]
console.log(printArray(arr1));


let strEmployee = [{"id" :"38575271","name":"Ajema","salary":70000},{"id":"234567989","name":"Ajema","salary":40000},{"id":"87654321","name":"Phineas","salary":200000}]
let sortedStrEmployee = strEmployee.sort(
 (salary1,salary2)=> (salary1.salary < salary2.salary)? -1 :(salary1.salary2 > salary2.salary)?
 1:0
)
  console.log(sortedStrEmployee)


  function multiply(nums){
    nums.forEach(nums => 
      {console.log(nums*2)
      
    });
  }
  let nums = [50,60,70,80]
  multiply(nums)


  function name(params) {
    
  }
  function operateArray(arr4) {
    for(let i =0; i<5 && i< arr4.length;i++){
      arr4[i] *=8
    }
    for(let i = arr4.length -2;i < arr4.length; i++){
      arr4[i] +=5
    }
    console.log(arr4)
  }
  let arr4 = [11,23,45,20,13,17,19,20,15];
  operateArray(arr4)

