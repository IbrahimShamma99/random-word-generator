export type WordsOptions = {
    min: number;
    max: number;
    exactly?: number;
    maxLength: number;
    wordsPerString?: number;
    separator?: string;
    join: string;
    formatter?: (word: string, index: number) => string;
};

export type WordsList = string[];


export const defaultOpts = {maxLength: 10, join: "-", min: 2, max: 5};
declare function randWordsGen(options: WordsOptions): string[];

export default randWordsGen;
