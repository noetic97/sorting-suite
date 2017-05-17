import { expect, assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort'
import generateRandomNumber from '../scripts/generateRandomNumber'

describe('Bubble Sort', () => {
  let numbers = [ 5, 4, 3, 2, 1 ];
  let sorted = bubbleSort(numbers);

  it('should be a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('should be a sort the array in order from smallest to largest', () => {

    expect(sorted).to.deep.equal([ 1, 2, 3, 4, 5 ])
  })

  it('should return a sorted array of the same length as the unsorted array', () => {

    expect(numbers.length).to.equal(5)
    expect(numbers.length).to.not.equal(3 || 6 || 7)
    expect(sorted.length).to.equal(5)
    expect(sorted.length).to.not.equal( 4 || 8 )
  })

  it('should sort large arrays', () => {
    let randomArray = generateRandomNumber(10000);
    let compSorted = [ ...randomArray ].sort((a, b) => a - b);
    // let compSorted = bubbleSort(randomArray);

    expect(bubbleSort(randomArray)).to.deep.equal(compSorted);
  })
})
