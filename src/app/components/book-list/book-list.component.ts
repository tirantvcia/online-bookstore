import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  currentCategoryId: number;
  searchModule: boolean;

  //pageOfItems: Array<Book>;
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 15, 20, 25]

  constructor(private _bookService: BookService, 
        private _activatedRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    //this.getListBooks();
    this._activatedRoutes.paramMap.subscribe( () => {
      this.getListBooks();
      }
      
    )
  }

  getListBooks() {
    this.searchModule = this._activatedRoutes.snapshot.paramMap.has('keyboard');
    if (this.searchModule)   {
      //do search work
      this.handleSearhListBooks();
    } else {
      this.handleListBooks();
    }
  }

  handleListBooks() {
    const hasCategoryId: boolean = this._activatedRoutes.snapshot.paramMap.has('id');
    if (hasCategoryId) {
        this.currentCategoryId = +this._activatedRoutes.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    //Subscriure el observer book-list (consumidor) al observable bookService (suscriptor)
    this._bookService.getBooks(this.currentCategoryId).subscribe (
      data => {
        this.books = data;
        //console.log(data);

      }
    )
  }

  handleSearhListBooks() {
    const keyboard: string = this._activatedRoutes.snapshot.paramMap.get('keyboard');
    this._bookService.searchBooks(keyboard).subscribe (
      data => {
        this.books = data;
      }
    )
  }

  handlePage(e: PageEvent ) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

}
