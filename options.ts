export type WordsOptions = {
    min?: number;
    max?: number;
    exactly?: number;
    maxLength?: number;
    wordsPerString?: number;
    separator?: string;
    join: string;
    formatter?: (word: string, index: number) => string;
};

export type WordsList = string[];