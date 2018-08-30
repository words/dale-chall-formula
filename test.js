'use strict';

var test = require('tape');
var nan = require('is-nan');
var daleChall = require('.');

var one = daleChall();
var two = daleChall({word: 30, sentence: 2});
var three = daleChall({word: 30, sentence: 2, difficultWord: 6});
var four = daleChall({word: 30, sentence: 1, difficultWord: 12});

test('daleChall', function (t) {
  t.ok(nan(one), 'NaN when an invalid value is given');
  t.equal(round(two), 0.744);
  t.equal(round(three), 7.5385);
  t.equal(round(four), 11.4405);

  t.end();
});

/* Grade-level. */
test('daleChallFormula.gradeLevel(score)', function (t) {
  var res = daleChall.gradeLevel(one);

  t.ok(nan(res[0]), 'NaN when an invalid value is given');
  t.ok(nan(res[1]), 'NaN when an invalid value is given');

  t.deepEqual(
    daleChall.gradeLevel(two),
    [0, 4]
  );

  t.deepEqual(
    daleChall.gradeLevel(three),
    [9, 10]
  );

  t.deepEqual(
    daleChall.gradeLevel(four),
    [16, Infinity]
  );

  t.end();
});

function round(val) {
  return Math.round(val * 1e6) / 1e6;
}
