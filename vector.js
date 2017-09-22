/**		
 Simple 2D Vector Operation calculator Class using Javascript
*/		

class Vector {
  constructor(v, w) {
    this.u = v
    this.w = w
    this.decimalPlaces = 2
    this.sign = {
      add: '+',
      subtract: '-'
    }
  }

  // scale vectors
  scale(num) {
    return this.u.map((e, i) => e * num)
  }

  // add vectors
  add() {
    return this.exec(this.sign.add)
  }

  // subtract vectors
  sub() {
    return this.exec(this.sign.subtract)
  }

  // scale the vector with multiplication
  mult() {
    return this.exec(this.sign.multiply)
  }
 
  // calculate sign
  exec(sign) {
    return this.u.map((e, i) => eval(
      e + sign + '(' + this.w[i] + ')'
    ))
  }
  
  // magnitude of a vector
  magnitude(v) {
    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2))
  }
  
  // vector magnitude from initial & terminal points
  segmentMagnitude() {
    return this.round(this.magnitude(this.sub()))
  }
  
  // round N decimal numbers
  round(num) {
    const precision = this.decimalPlaces
    return +(Math.round(num + "e+" + precision) + "e-" + precision);
  }
}
