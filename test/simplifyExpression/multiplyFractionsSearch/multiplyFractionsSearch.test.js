const multiplyFractionsSearch = require('../../../lib/simplifyExpression//multiplyFractionsSearch');

const TestUtil = require('../../TestUtil');

function testMultiplyFractionsSearch(exprString, outputStr) {
  TestUtil.testSimplification(multiplyFractionsSearch, exprString, outputStr);
}

describe('multiplyFractions', function () {
  const tests = [
    ['3 * 1/5 * 5/9', '(3 * 1 * 5) / (5 * 9)'],
    ['3/7 * 10/11', '(3 * 10) / (7 * 11)'],
    ['2 * 5/x', '(2 * 5) / x'],
    ['2 * (5/x)', '(2 * 5) / x'],
    ['(5/x) * (2/x)', '(5 * 2) / (x * x)'],
    ['-3/8 * 2/4', '(-3 * 2) / (8 * 4)'],
    ['(-1/2) * 4/5', '(-1 * 4) / (2 * 5)'],
    ['4 * (-1/x)', '(4 * -1) / x'],

    // TODO: This should work too, but right now we don't handle
    // unary minus around parenthesis
    // -(1/2) * (1/2)
  ];
  tests.forEach(t => testMultiplyFractionsSearch(t[0], t[1]));
});
