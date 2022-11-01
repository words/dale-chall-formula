const difficultWordWeight = 0.1579
const wordWeight = 0.0496
const difficultWordThreshold = 0.05
const percentage = 100
const adjustment = 3.6365

// Grade map associated with the scores.
const gradeMap = {
  4: [0, 4],
  5: [5, 6],
  6: [7, 8],
  7: [9, 10],
  8: [11, 12],
  9: [13, 15],
  10: [16, Number.POSITIVE_INFINITY],
  NaN: [Number.NaN, Number.NaN]
}

/**
 * @typedef {Object.<string, number>} DaleChallFormulaCounts
 * @property {number} sentence
 * @property {number} word
 * @property {number} difficultWord
 */

/**
 * Given the number of words (`word`), the number of sentences (`sentence`), and the number of unique unfamiliar words in a document (`difficultWord`), returns the score associated with the document.
 *
 * @param {DaleChallFormulaCounts} counts
 * @returns {number}
 */
export function daleChallFormula(counts) {
  if (!counts || !counts.sentence || !counts.word) {
    return Number.NaN
  }

  const percentageOfDifficultWords = (counts.difficultWord || 0) / counts.word
  let score =
    difficultWordWeight * percentageOfDifficultWords * percentage +
    (wordWeight * counts.word) / counts.sentence

  if (percentageOfDifficultWords > difficultWordThreshold) {
    score += adjustment
  }

  return score
}

/**
 * Mapping between a dale-chall score and a U.S. grade level.
 *
 * @param {number} score
 * @returns {[number, number]}
 */
export function daleChallGradeLevel(score) {
  let floored = Math.floor(score)

  if (floored < 5) {
    floored = 4
  } else if (floored > 9) {
    floored = 10
  }

  // eslint-ignore-next-line capitalized-comments
  // type-coverage:ignore-next-line
  return gradeMap[floored].concat()
}
