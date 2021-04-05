import test from 'tape'
import {daleChallFormula, daleChallGradeLevel} from './index.js'

test('daleChallFormula', function (t) {
  // @ts-ignore runtime
  t.ok(Number.isNaN(daleChallFormula()), 'NaN when an invalid value is given')
  t.equal(round(daleChallFormula({word: 30, sentence: 2})), 0.744)
  t.equal(
    round(daleChallFormula({word: 30, sentence: 2, difficultWord: 6})),
    7.5385
  )
  t.equal(
    round(daleChallFormula({word: 30, sentence: 1, difficultWord: 12})),
    11.4405
  )
  t.end()
})

// Grade-level.
test('daleChallGradeLevel(score)', function (t) {
  t.ok(
    // @ts-ignore runtime
    Number.isNaN(daleChallGradeLevel(daleChallFormula())[0]),
    'NaN when an invalid value is given'
  )
  t.ok(
    // @ts-ignore runtime
    Number.isNaN(daleChallGradeLevel(daleChallFormula())[1]),
    'NaN when an invalid value is given'
  )
  t.deepEqual(daleChallGradeLevel(daleChallFormula({word: 30, sentence: 2})), [
    0,
    4
  ])
  t.deepEqual(
    daleChallGradeLevel(
      daleChallFormula({word: 30, sentence: 2, difficultWord: 6})
    ),
    [9, 10]
  )
  t.deepEqual(
    daleChallGradeLevel(
      daleChallFormula({word: 30, sentence: 1, difficultWord: 12})
    ),
    [16, Number.POSITIVE_INFINITY]
  )
  t.end()
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
