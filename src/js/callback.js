let first = (number, callback) => {
  console.log(number);
  callback()
}

let second = (a, b) => console.log(a * b);

first(1, () => second(5,7))
