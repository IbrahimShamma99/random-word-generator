var randomWords = require("./index");

console.log(randomWords());

console.log(randomWords(5));

console.log(randomWords({ min: 3, max: 10 }));

console.log(randomWords({ exactly: 2 }));

console.log(randomWords({ exactly: 5, join: " " }));

console.log(randomWords({ exactly: 5, join: "" }));

console.log(randomWords({ exactly: 5, maxLength: 4 }));

console.log(randomWords({ exactly: 5, wordsPerString: 2 }));

console.log(randomWords({ exactly: 5, wordsPerString: 2, separator: "-" }));

console.log(
  randomWords({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word) => word.toUpperCase(),
  })
);

console.log(
  randomWords({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word, index) => {
      return index === 0
        ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
        : word;
    },
  })
);
