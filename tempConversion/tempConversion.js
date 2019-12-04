// C = (F - 32) * 5/9
const ftoc = function(degreesFarenheit) {
  let c = (degreesFarenheit - 32) * 5/9;
  return Math.round(c * 10) / 10;
}

// F = C * 9/5 + 32
const ctof = function(degreesCelsius) {
  let f = degreesCelsius * 9/5 + 32;
  return Math.round(f * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
