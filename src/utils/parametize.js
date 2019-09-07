// Takes in an object of parameters to include in a request,
// and converts them to a string of params
// This allows us to define our parameters in a more readable way
// from wherever we are including them in a request
const parametize = params =>
  Object.entries(params).reduce((string, [param, value]) => {
    const toInterpolate = `${param}=${value}`
    const prefix = !string ? '' : '&'
    return (string += prefix + toInterpolate)
  }, '')

module.exports = { parametize }
