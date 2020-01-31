# dale-chall-formula

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the grade level of text according to the [(revised) Dale–Chall
readability formula][formula].

See [`dale-chall`][list] for a list of words which count as “familiar”.

## Install

[npm][]:

```sh
npm install dale-chall-formula
```

## Use

```js
var daleChallFormula = require('dale-chall-formula')

daleChallFormula({word: 30, sentence: 2, difficultWord: 6}) // => 4.41208

daleChallFormula({word: 30, sentence: 2}) // => 0.744

daleChallFormula() // => NaN

daleChallFormula.gradeLevel(daleChallFormula(30, 2, 6)) // => [9, 10]
```

## API

### `daleChallFormula(counts)`

Given the number of words (`word`), the number of sentences (`sentence`), and
the number of unique unfamiliar words in a document (`difficultWord`), returns
the score associated with the document.

### `daleChallFormula.gradeLevel(score)`

Given a score, returns the corresponding grade ranges

|        Score | Corresponding Grade Level               | Return value     |
| -----------: | --------------------------------------- | ---------------- |
|  Less than 5 | Grade 4 and lower                       | `[0, 4]`         |
|  Less than 6 | Grades 5 and 6                          | `[5, 6]`         |
|  Less than 7 | Grades 7 and 8                          | `[7, 8]`         |
|  Less than 8 | Grades 9 and 10                         | `[9, 10]`        |
|  Less than 9 | Grades 11 and 12                        | `[11, 12]`       |
| Less than 10 | Grades 13 and 15 (College)              | `[13, 15]`       |
|       Higher | Grades 16 and higher (College Graduate) | `[16, Infinity]` |

## Related

*   [`automated-readability`](https://github.com/words/automated-readability)
    — Uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser
*   [`flesch`](https://github.com/words/flesch)
    — Uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — Like `flesch-formula`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — Uses syllable count, needs POS-tagging and NER
*   [`smog-formula`](https://github.com/words/smog-formula)
    — Like `gunning-fog-index`, without needing advanced NLP
*   [`spache-formula`](https://github.com/words/spache-formula)
    — Uses a dictionary, suited for lower reading levels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/dale-chall-formula.svg

[build]: https://travis-ci.org/words/dale-chall-formula

[coverage-badge]: https://img.shields.io/codecov/c/github/words/dale-chall-formula.svg

[coverage]: https://codecov.io/github/words/dale-chall-formula

[downloads-badge]: https://img.shields.io/npm/dm/dale-chall-formula.svg

[downloads]: https://www.npmjs.com/package/dale-chall-formula

[size-badge]: https://img.shields.io/bundlephobia/minzip/dale-chall-formula.svg

[size]: https://bundlephobia.com/result?p=dale-chall-formula

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Dale–Chall_readability_formula

[list]: https://github.com/words/dale-chall
