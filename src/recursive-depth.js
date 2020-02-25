module.exports = class DepthCalculator {
        calculateDepth (arr, cV) {
            if (!cV) {
                this.Depth = 0;
                this.currentNesting = 0;
            }
            if (arr instanceof Array){
                this.currentNesting += 1;
                arr.forEach(x => {
                    if (x instanceof Array){
                        this.calculateDepth(x, true);
                    }
                });
                if (this.currentNesting > this.Depth) this.Depth = this.currentNesting;
                this.currentNesting -= 1;
            }
            return this.Depth;
    }
};
