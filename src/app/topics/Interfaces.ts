export interface IBook {
    title: string;
    author: string;
    fileName: string;
    releaseDate: string
}

export interface IPosition {
    line: string;
    nbLine: number;
    initPos: number;
    endPos: number;
    word: string;
}

export interface ISearchResult {
    book: IBook;
    positions: Array<IPosition>;
}
