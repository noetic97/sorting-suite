import { expect, assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort'
import generateRandomNumber from '../scripts/generateRandomNumber'

describe('Bubble Sort', () => {
  let numbers = [ 5, 4, 3, 2, 1 ];
  let sorted = bubbleSort(numbers);

  it('should be a function', () => {
    expect(bubbleSort).to.be.a.function;
  })

  it('should return a sorted array of the same length as the unsorted array', () => {

    expect(numbers.length).to.equal(5)
    expect(numbers.length).to.not.equal(3 || 6 || 7)
    expect(sorted.length).to.equal(5)
    expect(sorted.length).to.not.equal( 4 || 8 )
  })

  it('should be a sort the array in order from smallest to largest', () => {
    let numbers2 = [ 3, 6, 9, 1, 6, 7, 2, 0 ];
    let sorted2 = bubbleSort(numbers2);

    expect(sorted2).to.deep.equal([ 0, 1, 2, 3, 6, 6, 7, 9 ])
  })

  it('should sort negative numbers properly', () => {
    let numbers3 = [ 4, 0, -3, -567, 2 ];
    let sortedNegatives = bubbleSort(numbers3);

    expect(sortedNegatives).to.deep.equal([ -567, -3, 0, 2, 4 ])
  })

  it('should sort large arrays (12,000)', () => {
    let randomArray = generateRandomNumber(12000);
    let compSorted = [ ...randomArray ].sort((a, b) => a - b);

    expect(bubbleSort(randomArray)).to.deep.equal(compSorted);
  })

  it('should sort an array of letters alphabetically', () => {
    let letterArray = [ 'f', 't', 'w', 'e', 'a', 'c', 'd' ];
    let sortedLetters = bubbleSort(letterArray);

    expect(sortedLetters).to.deep.equal([ 'a', 'c', 'd', 'e', 'f', 't', 'w' ])
  })
})
