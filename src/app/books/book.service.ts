import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book } from './books-grid/book';

@Injectable()
export class BookService {
  private booksUrl = 'http://localhost:3000/books';  // URL to web api

  constructor(private http: Http) { }

  getBooks(): Promise<Array<Book>> {
    const url = `${this.booksUrl}/getAll`;

    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        console.log(response);
        return response.json().data as Book[];
      })
      .catch(this.handleError);
  }


   postBook(book: any): Promise<Book> {
    console.log(JSON.stringify(book));
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.booksUrl}/add`;
    return this.http
      .post(url, book, { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}