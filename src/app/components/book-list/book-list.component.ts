import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  currentCategoryId: number;

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
}
