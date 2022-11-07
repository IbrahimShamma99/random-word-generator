import constructList from "./words";
import { WordsOptions, WordsList } from './options';
import { defaultOpts } from './options';

const fillNotfilled = (opts: WordsOptions) => {
  const options = { ...opts };
  if (!opts.maxLength) {
    options.maxLength = defaultOpts.maxLength;
  }
  if (!opts.max) {
    options.max = defaultOpts.max;
  }
  if (!opts.min) {
    options.min = defaultOpts.min;
  }
  return options;
}


function words(opts: WordsOptions = defaultOpts): string {


  const options: WordsOptions = fillNotfilled(opts);

  const wordList: WordsList = constructList();

  function word() {
    if (options && options.maxLength > 1) {
      return generateWordWithMaxLength();
    } else {
      return generateRandomWord();
    }
  }

  function generateWordWithMaxLength() {
    var rightSize = false;
    var wordUsed;
    while (!rightSize) {
      wordUsed = generateRandomWord();
      if (wordUsed.length <= options.maxLength) {
        rightSize = true;
      }
    }
    return wordUsed;
  }

  function generateRandomWord(): string {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan): number {
    return Math.floor(Math.random() * lessThan);
  }

  // No arguments = generate one word
  if (typeof options === "undefined") {
    return word();
  }

  // options supported: exactly, min, max, join
  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }

  // not a number = one word par string
  if (typeof options.wordsPerString !== "number") {
    options.wordsPerString = 1;
  }

  //not a function = returns the raw word
  if (typeof options.formatter !== "function") {
    options.formatter = (word) => word;
  }

  //not a string = separator is a space
  if (typeof options.separator !== "string") {
    options.separator = " ";
  }

  var total = options.min + randInt(options.max + 1 - options.min);
  var results: string[] = [];
  var token = "";
  var relativeIndex = 0;

  for (var i = 0; i < total * options.wordsPerString; i++) {
    if (relativeIndex === options.wordsPerString - 1) {
      token += options.formatter(word(), relativeIndex);
    } else {
      token += options.formatter(word(), relativeIndex) + options.separator;
    }
    relativeIndex++;
    if ((i + 1) % options.wordsPerString === 0) {
      results.push(token);
      token = "";
      relativeIndex = 0;
    }
  }

  return results.join(options.join);
}

export default words;
