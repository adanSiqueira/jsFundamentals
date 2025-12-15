/*****************************************************
 * ARRAYS
 * ---------------------------------------------------
 * Arrays are ordered data structures used to store
 * multiple values inside a single variable.
 *
 * Key characteristics:
 *  - Indexed (0-based)
 *  - Ordered
 *  - Mutable (can be changed after creation)
 *  - Can store values of different types
 *****************************************************/

let fruits = ['Apple', 'Banana', 'Cherry'];


/*
 * push()
 * ---------------------------------------------------
 * Adds one or more elements to the END of the array.
 * This method MUTATES the original array.
 */
fruits.push('Watermelon');
fruits.push('Strawberry');
fruits.push('Pineapple');
fruits.push('Mango', 'Grapes', 'Orange', 'Papaya', 'Kiwi', 'Peach');


/*
 * length
 * ---------------------------------------------------
 * Returns the total number of elements in the array.
 * This is NOT zero-based; it represents the count.
 */
console.log(fruits.length);


/*****************************************************
 * OBJECTS
 * ---------------------------------------------------
 * Objects store data in key–value pairs.
 *
 * Key characteristics:
 *  - Unordered (conceptually)
 *  - Keys are strings (or symbols)
 *  - Values can be ANY type (including arrays & objects)
 *
 * Objects are ideal for representing real-world entities.
 *****************************************************/

const person = {
    name: 'Ana',
    age: 28,
    profession: 'Developer',
    hasDegree: true,

    /*
     * Nested array of objects
     * ---------------------------------------------------
     * Objects can contain arrays, and arrays can contain
     * objects — this allows complex data modeling.
     */
    siblings: [
        {
            name: 'Maria',
            age: 30,
            profession: 'Engineer',
            hasDegree: true
        },
        {
            name: 'John',
            age: 25,
            profession: 'Designer',
            hasDegree: false
        }
    ]
};


/*****************************************************
 * ARRAY ITERATION & TRANSFORMATION METHODS
 *****************************************************/

/*
 * filter()
 * ---------------------------------------------------
 * Iterates over each element of the array
 * Applies a CONDITION (callback must return true/false)
 * Returns a NEW array containing only the elements
 * that satisfy the condition.
 *
 * IMPORTANT:
 *  - Does NOT mutate the original array
 *  - Used for selection
 */
console.log(fruits.filter(fruit => fruit.startsWith('A')));


/*
 * Same filter logic using a named function
 * ---------------------------------------------------
 * This version makes the logic more explicit and readable
 * for learning purposes.
 */
function filterPerA(fruit) {
    if (fruit.startsWith('A')) {
        return true;
    } else {
        return false;
    }
}

console.log(fruits.filter(filterPerA));


/*
 * map()
 * ---------------------------------------------------
 * Iterates over each element of the array
 * Applies a TRANSFORMATION
 * Returns a NEW array with transformed values
 *
 * IMPORTANT:
 *  - Does NOT mutate the original array
 *  - Used for data transformation
 */
let fruitsUpperCase = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsUpperCase);


/*
 * forEach()
 * ---------------------------------------------------
 * Iterates over each element of the array
 * Executes a function for each item
 *
 * IMPORTANT:
 *  - Does NOT return a new array
 *  - Used for side effects (logging, DOM updates, etc.)
 */
fruits.forEach(fruit => console.log(fruit));


/*****************************************************
 * LOOPING STRUCTURES
 *****************************************************/

/*
 * for...of (Arrays & Iterables)
 * ---------------------------------------------------
 * Iterates directly over VALUES of iterable objects
 * (arrays, strings, sets, maps).
 *
 * Preferred over classic for-loop when index is not needed.
 */
for (const fruit of fruits) {
    console.log(fruit);
}


/*
 * for...in (Objects)
 * ---------------------------------------------------
 * Iterates over the ENUMERABLE PROPERTY KEYS of an object.
 *
 * Not recommended for arrays.
 */
for (const attr of Object.keys(person)) {
    console.log(attr);
}


/*****************************************************
 * OBJECT UTILITIES
 *****************************************************/

/*
 * Object.keys()
 * ---------------------------------------------------
 * Returns an array of an object's own enumerable keys.
 * Useful for iteration.
 */
for (const attr of Object.keys(person)) {
    console.log(attr);
}


/*
 * Object.entries()
 * ---------------------------------------------------
 * Returns an array of [key, value] pairs.
 * Extremely useful for iterating over objects.
 */
for (const par of Object.entries(person)) {
    console.log(par[0] + ': ' + par[1]);
}


/*****************************************************
 * SORTING
 *****************************************************/

/*
 * sort()
 * ---------------------------------------------------
 * Sorts the array IN PLACE (mutates original array).
 *
 * Default behavior:
 *  - Converts elements to strings
 *  - Sorts lexicographically (alphabetical)
 *
 * WARNING:
 *  - Always provide a comparator for numbers!
 */
let sortedFruits = fruits.sort();
console.log(sortedFruits);


/*
 * Object.entries() on arrays
 * ---------------------------------------------------
 * When used on arrays, entries return:
 * [index, value]
 */
for (const par of Object.entries(sortedFruits)) {
    console.log(par);
}
