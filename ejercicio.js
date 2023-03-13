function sumArray(param) {
  const flatArray = param.flatMap((el) => (Array.isArray(el) ? sumArray(el) : el))
   
  return flatArray.reduce((acc, val)=> val + acc, 0)
}
const a = [1, 2, 4, [5, [3, 3, [4]]], 4];

console.log(sumArray(a));
