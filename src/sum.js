exports.sum = (a, b) => a + b;

exports.sum3 = (a, b, c) => a + b + c;

exports.sumN = (...list) => list.reduce(exports.sum,0);
