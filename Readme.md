# dale-chall-formula [![Build Status](https://img.shields.io/travis/wooorm/dale-chall-formula.svg?style=flat)](https://travis-ci.org/wooorm/dale-chall-formula) [![Coverage Status](https://img.shields.io/coveralls/wooorm/dale-chall-formula.svg?style=flat)](https://coveralls.io/r/wooorm/dale-chall-formula?branch=master)

Formula to detect the grade level of text according to the (revised) Dale–Chall Readability Formula.

See [dale-chall](https://github.com/wooorm/dale-chall) for a list of words which count as “familiar”.

## Installation

npm:
```sh
$ npm install dale-chall-formula
```

Component:
```sh
$ component install wooorm/dale-chall-formula
```

Bower:
```sh
$ bower install dale-chall-formula
```

## Usage

```js
var daleChallFormula = require('dale-chall-formula');

daleChallFormula({
    'word' : 30,
    'sentence' : 2,
    'difficultWord' : 6
});
// 4.41208

daleChallFormula({
    'word' : 30,
    'sentence' : 2
});
// 0.744

daleChallFormula() // NaN

daleChallFormula.gradeLevel(daleChallFormula(30, 2, 6)) // [9, 10]
```

## API

### daleChallFormula(counts)

Given the number of words (`word`), the number of sentences (`sentence`), and the number of unique unfamiliar words in a document (`difficultWord`), returns the score associated with the document.

### daleChallFormula.gradeLevel(score)

Given a score, returns the coresponding grade ranges

| Score        | Corresponding Grade Level               | Return value     |
| -----------: | --------------------------------------- | ---------------- |
| Less than 5  | Grade 4 and lower                       | `[0, 4]`         |
| Less than 6  | Grades 5 and 6                          | `[5, 6]`         |
| Less than 7  | Grades 7 and 8                          | `[7, 8]`         |
| Less than 8  | Grades 9 and 10                         | `[9, 10]`        |
| Less than 9  | Grades 11 and 12                        | `[11, 12]`       |
| Less than 10 | Grades 13 and 15 (College)              | `[13, 15]`       |
| Higher       | Grades 16 and higher (College Graduate) | `[16, Infinity]` |

## Related

- [automated-readability](https://github.com/wooorm/automated-readability) — Uses character count instead of an error-prone syllable parser;
- [coleman-liau](https://github.com/wooorm/coleman-liau) — Uses letter count instead of an error-prone syllable parser;
- [flesch](https://github.com/wooorm/flesch) — Uses syllable count;
- [flesch-kincaid](https://github.com/wooorm/flesch-kincaid) — Like **flesch-formula**; returns U.S. grade levels;
- [gunning-fog](https://github.com/wooorm/gunning-fog) — Uses syllable count; hard to implement with a computer (needs POS-tagging and Named Entity Recognition);
- [smog-formula](https://github.com/wooorm/smog-formula) — Like **gunning-fog-index**; without the need for advanced NLP tasks;
- [spache-formula](https://github.com/wooorm/spache-formula) — Uses a dictionary; suited for lower reading levels.

## License

MIT © [Titus Wormer](http://wooorm.com)
