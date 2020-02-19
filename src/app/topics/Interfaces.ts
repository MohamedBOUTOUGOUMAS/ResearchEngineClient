export interface IBook {
    title: string;
    author: string;
    fileName: string;
    releaseDate: string;
    content: string[];
}

export interface ISearchResult extends IBook {
    book: IBook;
    nbMatched: number;
}
