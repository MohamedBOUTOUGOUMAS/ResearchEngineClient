export interface IBook {
    title: string;
    author: string;
    fileName: string;
    releaseDate: string;
    content: string[];
}

export interface IPosition {
    line: string;
    nbLine: number;
    initPos: number;
    endPos: number;
    word: string;
}

export interface ISearchResult extends IBook {
    book: IBook;
    positions: Array<IPosition>;
}
