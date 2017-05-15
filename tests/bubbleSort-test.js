import { expect, assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort'
import generateRandomNumber from '../scripts/generateRandomNumber'

describe('Bubble Sort with filter', () => {
  it('should be a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('should be a function', () => {
    var numbers = [ 5, 4, 3, 2, 1 ];
    var sorted = bubbleSort(numbers);

    expect(sorted).to.equal([ 1, 2, 3, 4, 5 ])
  })

  it('should sort large arrays', () => {
    var randomArray = generateRandomNumber(8);
    var compSorted = randomArray.sort();

    expect(bubbleSort(randomArray)).to.deep.equal(compSorted);
  })

  randomArray.push(6);
  console.log(randomArray)
  console.log(compSorted);
})
