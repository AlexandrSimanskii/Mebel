// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }

//   console.log(GetSum(-6,10));

function nbDig(n, d) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    // console.log( String(i ** 2));
    String(i ** 2).includes(String(d))
      ? (arr = [
          ...arr,
          String(i ** 2)
            .split("")
            .filter((item) => item == d),
        ])
      : "";
  }
  return arr.flat(2).length
}
console.log(nbDig(5750, 0));
