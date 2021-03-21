const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if(typeof value ===  'undefined'){
      this.chain.push(' ')
    } else {
      this.chain.push(`( ${value} )`)
    }
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && position < this.chain.length) {
      this.chain.splice([position-1], 1)
      return this
    } else {
      this.chain = []
      throw new Error
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain = []
    return result
  }
};

module.exports = chainMaker;
