import assert from 'node:assert'
import test from 'node:test'
import {daleChallFormula, daleChallGradeLevel} from './index.js'

test('daleChallFormula', function () {
  assert.ok(
    // @ts-expect-error runtime
    Number.isNaN(daleChallFormula()),
    'NaN when an invalid value is given'
  )
  assert.equal(round(daleChallFormula({word: 30, sentence: 2})), 0.744)
  assert.equal(
    round(daleChallFormula({word: 30, sentence: 2, difficultWord: 6})),
    7.5385
  )
  assert.equal(
    round(daleChallFormula({word: 30, sentence: 1, difficultWord: 12})),
    11.4405
  )
})

// Grade-level.
test('daleChallGradeLevel(score)', function () {
  assert.ok(
    // @ts-expect-error runtime
    Number.isNaN(daleChallGradeLevel(daleChallFormula())[0]),
    'NaN when an invalid value is given'
  )
  assert.ok(
    // @ts-expect-error runtime
    Number.isNaN(daleChallGradeLevel(daleChallFormula())[1]),
    'NaN when an invalid value is given'
  )
  assert.deepEqual(
    daleChallGradeLevel(daleChallFormula({word: 30, sentence: 2})),
    [0, 4]
  )
  assert.deepEqual(
    daleChallGradeLevel(
      daleChallFormula({word: 30, sentence: 2, difficultWord: 6})
    ),
    [9, 10]
  )
  assert.deepEqual(
    daleChallGradeLevel(
      daleChallFormula({word: 30, sentence: 1, difficultWord: 12})
    ),
    [16, Number.POSITIVE_INFINITY]
  )
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
