const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push((value === undefined) ? '' : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.getLength() < position || position <= 0) {
      this.chain = [];
      throw Error;
    }
    if (typeof position !== 'number') {
      this.chain = [];
      throw Error;
    }

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const newChain = [...this.chain];
    this.chain = [];
    return newChain.join('~~');
  }
};

module.exports = chainMaker;
