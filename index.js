'use strict';

/**
 * The constants as defined by the Dale--Chall Readability Formula.
 */

var DIFFICULT_WORD_WEIGHT,
    WORD_WEIGHT,
    DIFFICULT_WORD_THRESHOLD,
    PERCENTAGE,
    ADJUSTMENT;

DIFFICULT_WORD_WEIGHT = 0.1579;
WORD_WEIGHT = 0.0496;
DIFFICULT_WORD_THRESHOLD = 0.05;
PERCENTAGE = 100;
ADJUSTMENT = 3.6365;

/**
 * Get the grade level of a given value according to the Dale--Chall
 * Readability Formula. More information is available at WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/Dale–Chall_readability_formula
 *
 * @param {Object} counts
 * @param {number} counts.word - Number of words.
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.difficultWord - Number of difficult words.
 * @return {number}
 */

function daleChall(counts) {
    var percentageOfDifficultWords,
        score;

    if (!counts || !counts.sentence || !counts.word) {
        return NaN;
    }

    percentageOfDifficultWords = (counts.difficultWord || 0) / counts.word;

    score = DIFFICULT_WORD_WEIGHT * percentageOfDifficultWords * PERCENTAGE +
        WORD_WEIGHT * (counts.word / counts.sentence);

    if (percentageOfDifficultWords > DIFFICULT_WORD_THRESHOLD) {
        score += ADJUSTMENT;
    }

    return score;
}

/**
 * The grade map associated with the scores.
 */

var GRADE_MAP;

GRADE_MAP = {
    4: [0, 4],
    5: [5, 6],
    6: [7, 8],
    7: [9, 10],
    8: [11, 12],
    9: [13, 15],
    10: [16, Infinity],
    NaN: [NaN, NaN]
};

/**
 * Simple mapping between a dale-chall score and a U.S. grade level.
 */

function daleChallGradeLevel(score) {
    score = Math.floor(score);

    if (score < 5) {
        score = 4;
    } else if (score > 9) {
        score = 10;
    }

    return GRADE_MAP[score].concat();
}

/**
 * Export `daleChallGradeLevel`.
 */

daleChall.gradeLevel = daleChallGradeLevel;

/**
 * Export `daleChall`.
 */

module.exports = daleChall;
