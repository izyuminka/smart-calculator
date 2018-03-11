class SmartCalculator {
    constructor(initialValue) {
        this.sequnce = initialValue;
        this.value = this.sequnce.toString();
    }

    toString() {
        return this.value;
    }

    evaluate(oper, number) {
        this.sequnce += oper + number;
        this.value = eval(this.sequnce.toString());
    }

    add(number) {
        this.evaluate(" + ", number);
        return this;
    }

    subtract(number) {
        this.evaluate(" - ", number);
        return this;
    }

    multiply(number) {
        this.evaluate(" * ", number);
        return this;
    }

    devide(number) {
        this.evaluate(" / ", number);
        return this;
    }

    pow(number) {
        this.evaluate(" ** ", number);
        return this;
    }
}

module.exports = SmartCalculator;
