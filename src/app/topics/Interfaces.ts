export interface IBook {
    title: string;
    author: string;
    fileName: string;
    releaseDate: string;
    content: string[];
    imageUrl?: string;
}

export interface ISearchResult extends IBook {
    book: IBook;
    nbMatched: number;
}

export const URI = 'https://research-engine.herokuapp.com/';
export const URI_LOCAL = 'http://localhost:8080/';
