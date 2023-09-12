// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }

//   console.log(GetSum(-6,10));

function duplicateCount(text) {
  let sum = 0;
  let obj = {};
  for (let i = 0; i < text.length - 1; i++) {
    if (text[i].toUpperCase() in obj) {
      obj[text[i].toUpperCase()]++;
    } else {
     
      obj[text[i].toUpperCase()] = 1;
    }
  }
  for (let key in obj) {
    obj[key] > 1 ? sum++ : null;
  }
 return obj
}
;
console.log(duplicateCount("characters"));