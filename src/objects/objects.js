/**
 * In JavaScript objects are really diffrent form Java or other object based languages.
 * The syntax to use it looks more like declaring structs, but the can also carry methods.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
 */

/**
 * @return {Object} you should return a new object containing two properties, first_name and last_name.
 * The values of the properties should be "Toto", "Tutu"
 */
export function crateUserObject() {
  //
  const user = { first_name: "Toto", last_name: "Tutu" }
  return user
}

/**
 *
 * @param {{first_name: string, last_name:string}} object A user object
 * @return string a concatenation of the first and last name, separated with a space
 */
export function accessPropertiesInObjects(object) {
  //
  let first_name = object.first_name
  let last_name = object.last_name

  return `${first_name} ${last_name}`
}

/**
 *
 * @param {Object} object
 * @return {{keys: Array<string>, values: Array<string>}} A new object containing two keys (keys, values),
 * each key should contain respectively all original object keys mapped to uppercase,
 * and all original object values mapped to lower case
 */
export function iteratesThroughObjectValuesAndProperties(object) {
  //
  let key = Object.keys(object).map((key) => key.toUpperCase())
  let value = Object.values(object).map((value) => value.toLowerCase())
  return {
    keys: key,
    values: value,
  }
}

/**
 * Return the name of the first younger and last older user in the array
 * @param {array<{name: string, age: number}>} users
 * @return {string}
 */
export function retrieveMaximumMinimumUserAges(users) {
  //
  users.sort((a, b) => a.age - b.age)

  const younger = users[0].name
  const older = users[users.length - 1].name

  return { younger: younger, older: older }
}

/**
 * In javascript, objects can be represented as string, this is JSON
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 * @param {string} string
 * @return {Object} An object retried by parsing the string
 */
export function parseJavaScriptObjectNotation(string) {
  //
  const parseString = JSON.parse(string)
  return parseString
}

/**
 * @param {Object} object
 * @return {string} An string representing the given object
 */
export function stringifyJavaScriptObjectNotation(object) {
  //
  const jsonString = JSON.stringify(object)
  return jsonString
}
