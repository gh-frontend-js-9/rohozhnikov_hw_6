/*task0 3.1*/
let arr = [ 4, 5, 47, 85, 255, 1];
let arrMin = Math.min.apply(null, arr)
  console.log("Min: " + arrMin);
let arrMax = Math.max.apply(null, arr)
  console.log("Max: " + arrMax);
let arrSort = arr;
console.log("Sort: " + arrSort.sort());
let sum = arr.reduce(function(sum, current) {
  return sum + current;
});
console.log("Sum elements: " + sum);

/*task 3.2*/
function myFunction(color, callback) {
  console.log(`Вам нравиться ${color} цвет?`);
  callback();//функция обратного вызова
}
myFunction('синий', function() {
  console.log('Нет, мой любимый красный!');
})
/*task 3.3*/
let arr = [2, 3, 4, 7, 12, 14, 18, 21, 91]; //масив
for (let i=0; i< arr.length; i++) {
  if((arr[i]% 3==0) && (arr[i]% 7==0)) {
    arr[i]='foobar';
  }
  else
    if((arr[i]%3)==0){
    arr[i]='foo';
  }
  else
    if((arr[i]%7)==0){
    arr[i]='bar';
  }
}
console.log(arr);
/*task 3.4*/ 
