
/**
 * Return the combination of possibleValues that summed got the wantedValue
 * @param {number} wantedValue Wanted value of the sum
 * @param {Array<number>} possibleValues SORTED Possibles values to sum in the algorithm
 * @param {Array<number>} probabilities Probabilities of choose the values
 */
module.exports.randomSum = function (wantedValue, possibleValues, probabilities){
    return searchRandomSum(wantedValue, possibleValues, probabilities, []);
}


/**
 * Return the combination of possibleValues that summed got the wantedValue
 * @param {number} wantedValue Wanted value of the sum
 * @param {Array<number>} possibleValues SORTED Possibles values to sum in the algorithm
 * @param {Array<number>} probabilities Probabilities of choose the values
 * @param {Array<number>} resultingValues Values that are be processing by the algorithm
 */
function searchRandomSum(wantedValue, possibleValues, probabilities, resultingValues){
    let amount = sumOfarray(resultingValues);
    
    if (amount == wantedValue){
        return resultingValues;
    }
    else if (amount > wantedValue){
        let added = removeAndAddPrevious(possibleValues, resultingValues)
        if(!added){
            return null;
        }
    }
    else{
        let value = !probabilities ? getRandomNumberFromArray(possibleValues) : getRandomNumberWithProbabilitiesFromArray(possibleValues, probabilities);
        resultingValues.push(value);
    }
    return searchRandomSum(wantedValue, possibleValues, probabilities, resultingValues);
}


/**
 * Used to remove the last element of resulting Values array and change it for its previous value
 * @param {Array<number>} possibleValues Possibles values to sum in the algorithm
 * @param {Array<number>} resultingValues Values that are be processing by the algorithm
 * @returns {boolean} True if all is OK, False if is not possible get previous value
 */
function removeAndAddPrevious(possibleValues, resultingValues){
    let added = false;
    while(!added && resultingValues.length > 0){
        let lastValue = resultingValues.pop();
        let i = possibleValues.indexOf(lastValue);
        if (i > 0){
            resultingValues.push(possibleValues[i-1]);
            added = true;
        }
    }
    return added;
}


/**
 * Used to sum the elements of array
 * @param {Array<number>} array Array that will be summed
 * @returns {number} Sum of the array elements
 */
function sumOfarray(array){
    return array.reduce((a, b) => a + b, 0);
}

/**
 * Sort Array
 * @param {Array<number>} array Array that will be sorted
 * @returns {Array<number>} Sorted array
 */
function sortArray (array){
    return array.sort(function(a, b){return a-b});
}


/**
 * Used to generate random number between range
 * @param {number} min Minimum number
 * @param {number} max Maximum number
 * @returns {number} Random number
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Used to get a random value of a list having account certains probabilities
 * @param {Array<number>} values Possible values to choose
 * @param {Array<number>} probabilities Probabilities of choose the values
 * @returns {number} Random value
 */
function getRandomNumberWithProbabilitiesFromArray(values, probabilities){
    let allValues = [];
    for(let i=0; i<values.length; i++){
        for(let j=0; j<probabilities[i]; j++){
            allValues.push(values[i]);
        }   
    }
    let i = randomIntFromInterval(0, allValues.length-1);
    return allValues[i];
}


/**
 * Used to get a random value of a list
 * @param {Array<number>} values Possible values to choose
 */
function getRandomNumberFromArray(values) {
    let i = randomIntFromInterval(0, values.length-1);
    return values[i];
}
