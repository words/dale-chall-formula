'use strict';

var daleChallFormula, assert, resultOne, resultTwo, resultThree, resultFour;

/**
 * Module dependencies (daleChallFormula, assert).
 */

daleChallFormula = require('..');
assert = require('assert');

/**
 * Assert, but up to 6 digits.
 */

function roundAssert(a, b) {
    assert(Math.round(a * 1000000) === Math.round(b * 1000000));
}

/**
 * Unit tests.
 */

describe('daleChallFormula(wordCount, sentenceCount, difficultWordCount)',
    function () {
        it('should be of type `function`', function () {
            assert(typeof daleChallFormula === 'function');
        });

        it('should work', function () {
            resultOne = daleChallFormula();

            resultTwo = daleChallFormula({
                'word' : 30,
                'sentence' : 2
            });

            resultThree = daleChallFormula({
                'word' : 30,
                'sentence' : 2,
                'difficultWord' : 6
            });

            resultFour = daleChallFormula({
                'word' : 30,
                'sentence' : 1,
                'difficultWord' : 12
            });

            assert(resultOne !== resultOne);
            roundAssert(resultTwo, 0.744);
            roundAssert(resultThree, 7.5385);
            roundAssert(resultFour, 11.4405);
        });
    }
);

describe('daleChallFormula.gradeLevel(score)', function () {
    it('should be of type `function`', function () {
        assert(typeof daleChallFormula.gradeLevel === 'function');
    });

    it('should work', function () {
        var gradeLevel;

        gradeLevel = daleChallFormula.gradeLevel(resultOne);
        assert(
            gradeLevel[0] !== gradeLevel[0] &&
            gradeLevel[1] !== gradeLevel[1]
        );

        gradeLevel = daleChallFormula.gradeLevel(resultTwo);
        assert(gradeLevel[0] === 0 && gradeLevel[1] === 4);

        gradeLevel = daleChallFormula.gradeLevel(resultThree);
        assert(gradeLevel[0] === 9 && gradeLevel[1] === 10);

        gradeLevel = daleChallFormula.gradeLevel(resultFour);
        assert(gradeLevel[0] === 16 && gradeLevel[1] === Infinity);
    });
});
