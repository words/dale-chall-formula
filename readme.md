# dale-chall-formula

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the grade level of text according to the [(revised) Dale–Chall
readability formula][formula].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`daleChallFormula(counts)`](#dalechallformulacounts)
    *   [`daleChallGradeLevel(score)`](#dalechallgradelevelscore)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes an algorithm to detect ease of reading of English texts.

## When should I use this?

You’re probably dealing with natural language, and know you need this, if
you’re here!

See [`dale-chall`][list] for a list of words which count as “familiar”.
All other words are considered “difficult” for this algorithm.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install dale-chall-formula
```

In Deno with [`esm.sh`][esmsh]:

```js
import {daleChallFormula, daleChallGradeLevel} from 'https://esm.sh/dale-chall-formula@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {daleChallFormula, daleChallGradeLevel} from 'https://esm.sh/dale-chall-formula@2?bundle'
</script>
```

## Use

```js
import {daleChallFormula, daleChallGradeLevel} from 'dale-chall-formula'

daleChallFormula({word: 30, sentence: 2, difficultWord: 6}) // => 4.41208

daleChallGradeLevel(daleChallFormula({word: 30, sentence: 2, difficultWord: 6})) // => [9, 10]
```

## API

This package exports the identifiers `daleChallFormula`, `daleChallGradeLevel`.
There is no default export.

### `daleChallFormula(counts)`

Given the number of words (`word`), the number of sentences (`sentence`), and
the number of unique unfamiliar words in a document (`difficultWord`), returns
the score associated with the document.

##### `counts`

Counts from input document.

###### `counts.sentence`

Number of sentences (`number`, required).

###### `counts.word`

Number of words (`number`, required).

###### `counts.difficultWord`

Number of unique unfamiliar words (`number`, default: `0`).

##### Returns

Score representing ease of reading (`number`).

Pass it to `daleChallGradeLevel` to get grade levels.

### `daleChallGradeLevel(score)`

Turn a dale–chall score into U.S. grade levels.

###### `score`

Score representing ease of reading.

###### Returns

Grade levels (`[number, number]`).

|        Score | Corresponding grade level               | Return value     |
| -----------: | --------------------------------------- | ---------------- |
|  Less than 5 | Grade 4 and lower                       | `[0, 4]`         |
|  Less than 6 | Grades 5 and 6                          | `[5, 6]`         |
|  Less than 7 | Grades 7 and 8                          | `[7, 8]`         |
|  Less than 8 | Grades 9 and 10                         | `[9, 10]`        |
|  Less than 9 | Grades 11 and 12                        | `[11, 12]`       |
| Less than 10 | Grades 13 and 15 (College)              | `[13, 15]`       |
|       Higher | Grades 16 and higher (College Graduate) | `[16, Infinity]` |

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Counts`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`automated-readability`](https://github.com/words/automated-readability)
    — uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — uses letter count instead of an error-prone syllable parser
*   [`flesch`](https://github.com/words/flesch)
    — uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — like `flesch-formula`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — uses syllable count, needs POS-tagging and NER
*   [`smog-formula`](https://github.com/words/smog-formula)
    — like `gunning-fog-index`, without needing advanced NLP
*   [`spache-formula`](https://github.com/words/spache-formula)
    — uses a dictionary, suited for lower reading levels

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/dale-chall-formula/workflows/main/badge.svg

[build]: https://github.com/words/dale-chall-formula/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/dale-chall-formula.svg

[coverage]: https://codecov.io/github/words/dale-chall-formula

[downloads-badge]: https://img.shields.io/npm/dm/dale-chall-formula.svg

[downloads]: https://www.npmjs.com/package/dale-chall-formula

[size-badge]: https://img.shields.io/bundlephobia/minzip/dale-chall-formula.svg

[size]: https://bundlephobia.com/result?p=dale-chall-formula

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Dale–Chall_readability_formula

[list]: https://github.com/words/dale-chall
