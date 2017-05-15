function generateRandomNumber (count) {
  var numArray = [];

  for (var i = 0; i < count.length; i++) {
    let randomNumber = Math.random() * 1000;
    count[i].push(randomNumber);
  }


  return numArray;
}

export default generateRandomNumber;
