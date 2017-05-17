function generateRandomNumber (count) {
  let numArray = [];

  for (let i = 0; i < count; i++) {
    numArray.push( Math.floor( Math.random() * 10000) );
  }

  return numArray;
}

export default generateRandomNumber;
