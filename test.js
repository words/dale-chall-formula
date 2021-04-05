'use strict'

var test = require('tape')
var daleChall = require('.')

var one = daleChall()
var two = daleChall({word: 30, sentence: 2})
var three = daleChall({word: 30, sentence: 2, difficultWord: 6})
var four = daleChall({word: 30, sentence: 1, difficultWord: 12})

test('daleChall', function (t) {
  t.ok(Number.isNaN(daleChall()), 'NaN when an invalid value is given')
  t.equal(round(two), 0.744)
  t.equal(round(three), 7.5385)
  t.equal(round(four), 11.4405)
  t.end()
})

// Grade-level.
test('daleChallFormula.gradeLevel(score)', function (t) {
  var level = daleChall.gradeLevel(one)
  t.ok(Number.isNaN(level[0]), 'NaN when an invalid value is given')
  t.ok(Number.isNaN(level[1]), 'NaN when an invalid value is given')
  t.deepEqual(daleChall.gradeLevel(two), [0, 4])
  t.deepEqual(daleChall.gradeLevel(three), [9, 10])
  t.deepEqual(daleChall.gradeLevel(four), [16, Number.POSITIVE_INFINITY])
  t.end()
})

function round(value) {
  return Math.round(value * 1e6) / 1e6
}
