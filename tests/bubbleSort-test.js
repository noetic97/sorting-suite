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
    console.log(sorted)

    expect(sorted).to.deep.equal([ 1, 2, 3, 4, 5 ])
  })

  it('should sort large arrays', () => {
    var randomArray = generateRandomNumber(1000000);
    var compSorted = [ ...randomArray ].sort((a, b) => a - b);

    expect(bubbleSort(randomArray)).to.deep.equal(compSorted);
  })
})
