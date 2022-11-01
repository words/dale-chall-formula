/**
 * @typedef Counts
 *   Counts from input document.
 * @property {number} sentence
 *   Number of sentences.
 * @property {number} word
 *   Number of words.
 * @property {number} difficultWord
 *   Number of difficult words.
 */

/**
 * @typedef {Counts} DaleChallFormulaCounts
 *   Deprecated: please use the `Counts` type instead.
 */

const difficultWordWeight = 0.1579
const wordWeight = 0.0496
const difficultWordThreshold = 0.05
const percentage = 100
const adjustment = 3.6365

// Grade map associated with the scores.
/** @type {Record<string, [number, number]>} */
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
 * Given the number of words (`word`), the number of sentences (`sentence`),
 * and the number of unique unfamiliar words in a document (`difficultWord`),
 * returns the score associated with the document.
 *
 * @param {Counts} counts
 *   Counts from input document.
 * @return {number}
 *   Number representing ease of reading.
 *   Pass it to `daleChallGradeLevel` to get grade levels.
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
 * Map between a dale–chall score and a U.S. grade level.
 *
 * @param {number} score
 *   Number representing ease of reading.
 * @returns {[number, number]}
 *   Grade levels.
 */
export function daleChallGradeLevel(score) {
  let floored = Math.floor(score)

  if (floored < 5) {
    floored = 4
  } else if (floored > 9) {
    floored = 10
  }

  // @ts-expect-error: fine.
  return gradeMap[floored].concat()
}
