import { expect, assert } from 'chai';
import insertionSort from '../scripts/insertionSort'
import generateRandomNumber from '../scripts/generateRandomNumber'

describe('Insertion Sort', () => {
  let numbers = [ 5, 4, 3, 2, 1 ];
  let sorted = insertionSort(numbers);

  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('should return a sorted array of the same length as the unsorted array', () => {

    expect(numbers.length).to.equal(5)
    expect(numbers.length).to.not.equal(3 || 6 || 7)
    expect(sorted.length).to.equal(5)
    expect(sorted.length).to.not.equal( 4 || 8 )
  })

  it('should return a sorted array from smallest to largest', () => {
    let numbers2 = [ 3, 6, 9, 1, 6, 7, 2, 0 ];
    let sorted2 = insertionSort(numbers2);

    expect(sorted2).to.deep.equal([ 0, 1, 2, 3, 6, 6, 7, 9 ])
  })

  it('should sort negative numbers properly', () => {
    let numbers3 = [ 4, 0, -3, -567, 2 ];
    let sortedNegatives = insertionSort(numbers3);

    expect(sortedNegatives).to.deep.equal([ -567, -3, 0, 2, 4 ])
  })

  it('should sort large arrays', () => {
    let randomArray = generateRandomNumber(500);
    
  })

})
