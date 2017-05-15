function generateRandomNumber (count) {
  var numArray = [];

  for (let i = 0; i < count.length; i++) {
    numArray.push( Math.floor( Math.random() * 1000) );
  }
  console.log(numArray);
  return numArray;
}

export default generateRandomNumber;
