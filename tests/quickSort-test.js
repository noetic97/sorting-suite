import { expect, assert } from 'chai';
import quickSort from '../scripts/quickSort'
import generateRandomNumber from '../scripts/generateRandomNumber'

describe('Quick Sort', () => {
  let numbers = [ 6, 5, 4, 3, 2, 1 ];
  let sorted = quickSort(numbers);

  it('should be a function', () => {
    assert.isFunction(quickSort)
  })

  it('should return a sorted array of the same length as the unsorted array', () => {
    expect(numbers.length).to.equal(6)
    expect(numbers.length).to.not.equal(3 || 5 || 7)
    expect(sorted.length).to.equal(6)
    expect(sorted.length).to.not.equal( 4 || 8 )
  })

  it('should sort an array from smallest to largest', () => {
    let numbers2 = [ 3, 6, 9, 1, 6, 7, 2, 0 ];
    let sorted2 = quickSort(numbers2);

    expect(sorted2).to.deep.equal([ 0, 1, 2, 3, 6, 6, 7, 9 ])
  })

  it('should sort negative numbers properly', () => {
    let numbers3 = [ 4, 0, -3, -567, 2 ];
    let sortedNegatives = quickSort(numbers3);

    expect(sortedNegatives).to.deep.equal([ -567, -3, 0, 2, 4 ])
  })

  it('should sort large arrays (425,000)', () => {
    let randomArray = generateRandomNumber(425000);
    let compSorted = [ ...randomArray ].sort((a, b) => a - b);

    expect(quickSort(randomArray)).to.deep.equal(compSorted);
  })

  it('should sort an array of letters alphabetically', () => {
    let letterArray = [ 'f', 't', 'w', 'e', 'a', 'c', 'd' ];
    let sortedLetters = quickSort(letterArray);

    expect(sortedLetters).to.deep.equal([ 'a', 'c', 'd', 'e', 'f', 't', 'w' ])
  })
})
