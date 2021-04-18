function sumarize(inputArray) {
  let total = 0;
  if (inputArray) {
    const newArray = inputArray.filter(Boolean);
    for (let i = 0; i < newArray.length; i++) {
      if (typeof newArray[i] === "number") {
        total = total + newArray[i];
      } else if (newArray[i] instanceof Array) {
        total = total + sumarize(newArray[i]);
      }
    }
    return total;
  }
  return 0;
}

module.exports = {
  sumarize,
};
