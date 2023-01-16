
//display 1-20 on a single li e as a text separated by semicolon
let result = "";
for (let i = 0; i <= 20; i++){
    result = result + i + "; ";
}
console.log(result);


//display the odd number from 1-20 each on it s own line 
for (i = 1; i <= 20; i++){
if ( i % 2  !== 0){
    console.log(i);
}
}

//return-computes the minimum of all the numbers in an array and returns it
const array = [45, -30, 17, 19, 72];
function minOfArr(arr) {
    var min = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];   
        }
    }
    return min;
}
console.log(minOfArr(array));

//return-computes how many times a certain item appears in an array and returns the number
const numbers = [10, 20, 30, 10, 40 ,50, 10, 10, 99];
function countItem (arr, item) {
    let count = 0 ;
    for (let i of arr) {
        if(i === item){
            count++;
     
       }
    }
    return count;
}
console.log(countItem(numbers, 10));