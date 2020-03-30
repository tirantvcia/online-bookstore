import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  /*= [
    {
      sku: 	"text-100", 
      name:     "C Programming Language", 
        description:     "Learn C Programming Language",
        imageUrl:     "assets/images/books/text-100.png",
        active:     true,
        unitsInStock:    100,
        unitPrice:     600,
      //  category:    1, 
        createdOn: new Date(), 
        updatedOn: null,
    },
    {
      
      sku: 	"text-101", 
      name:     "C# Crash Course", 
        description:     "Learn C# Programming Language",
        imageUrl:     "assets/images/books/text-101.png",
        active:     true,
        unitsInStock:    100,
        unitPrice:     900,
      //  category:    1, 
        createdOn: new Date(), 
        updatedOn: null,
    },
    {
    
    
      sku: 	"text-102", 
      name:     "C++ Crash Course", 
        description:     "Learn C++ Programming Language",
        imageUrl:     "assets/images/books/text-102.png",
        active:     true,
        unitsInStock:    100,
        unitPrice:     700,
      //  category:    1, 
        createdOn: new Date(), 
        updatedOn: null,
    }   
  ] */
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.getListBooks();
  }

  getListBooks() {
    //Subscriure el observer book-list (consumidor) al observable bookService (suscriptor)
    this._bookService.getBooks().subscribe (
      data => {
        this.books = data;
        //console.log(data);

      }
    )
  }
}
