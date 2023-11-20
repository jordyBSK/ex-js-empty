/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
    //

    if (isNaN(diameter)) {
        throw new Error('Parameter is not a number!');
    }
    let r = diameter / 2

    return 4 / 3 * Math.PI * Math.pow(r, 3);
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
    //

    if (isNaN(n)) {
        throw new Error('Parameter is not a number!');
    }

    return Math.round(n * 10) / 10;
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
    //
    if (!Array.isArray(grades) || grades.length === 0) {
        throw new Error('Array is empty');
    }

    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        if (isNaN(grades[i]) || grades[i] === "") {
            throw new Error(`Element at index ${i} is not a valid number`);
        }
        sum += parseFloat(grades[i]);
    }

    return sum / grades.length;

}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
    //
    if (!Array.isArray(grades) || grades.length === 0) {
        throw new Error('Array is empty');
    }

    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        if (isNaN(grades[i]) || grades[i] === "") {
            throw new Error('Element at index ' + { i } + 'is not a valid number');
        }
        sum += parseFloat(grades[i]);
    }

    let average = (sum / grades.length);

    return Math.round(average * 10) / 10;

}
