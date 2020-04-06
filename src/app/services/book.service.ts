import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl:string = "http://localhost:8080/api/v1/books";
  private categoryUrl: string =  "http://localhost:8080/api/v1/book-category";
  constructor(private httpClient: HttpClient) { }

  getBooks(categoryId: number): Observable<Book[]> {
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${categoryId}`;
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(
      map(response => response._embedded.books)
    );
  }

  getBookCategories(): Observable<BookCategory[]> {
    const searchUrl = `${this.categoryUrl}`;
    return this.httpClient.get<GetResponseBookCategories>(searchUrl).pipe(
      map(response => response._embedded.bookCategory)
    );
  }
}

/*
This will help to unwrap the book array
from json response

{
  "_embedded" : {
    "books" : []
  }
*/


interface GetResponseBooks {
  _embedded: {
    books: Book[];
  }
}

interface GetResponseBookCategories {
  _embedded: {
    bookCategory: BookCategory[];
  }
}