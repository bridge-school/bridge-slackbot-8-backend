/**
 * Takes in an object of parameters to include in a request,
 * and converts them to query string params
 * This allows us to define our parameters in a more readable way
 * from wherever we are including them in a request
 * Furthermore, if there is a space in the given value,
 * this value will be safely encoded
 */

const parametize = params =>
  Object.entries(params).reduce((string, [param, value]) => {
    const encodedValue = value
      .toString()
      .split(' ')
      .join('%20')
    const toInterpolate = `${param}=${encodedValue}`
    const prefix = !string ? '' : '&'
    return (string += prefix + toInterpolate)
  }, '')

module.exports = parametize
