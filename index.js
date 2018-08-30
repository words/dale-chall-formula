'use strict'

module.exports = daleChall
daleChall.gradeLevel = daleChallGradeLevel

var difficultWordWeight = 0.1579
var wordWeight = 0.0496
var difficultWordThreshold = 0.05
var percentage = 100
var adjustment = 3.6365

// Grade map associated with the scores.
var gradeMap = {
  4: [0, 4],
  5: [5, 6],
  6: [7, 8],
  7: [9, 10],
  8: [11, 12],
  9: [13, 15],
  10: [16, Infinity],
  NaN: [NaN, NaN]
}

function daleChall(counts) {
  var percentageOfDifficultWords
  var score

  if (!counts || !counts.sentence || !counts.word) {
    return NaN
  }

  percentageOfDifficultWords = (counts.difficultWord || 0) / counts.word

  score =
    difficultWordWeight * percentageOfDifficultWords * percentage +
    (wordWeight * counts.word) / counts.sentence

  if (percentageOfDifficultWords > difficultWordThreshold) {
    score += adjustment
  }

  return score
}

// Mapping between a dale-chall score and a U.S. grade level.
function daleChallGradeLevel(score) {
  score = Math.floor(score)

  if (score < 5) {
    score = 4
  } else if (score > 9) {
    score = 10
  }

  return gradeMap[score].concat()
}
