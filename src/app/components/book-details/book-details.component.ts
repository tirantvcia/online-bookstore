import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book = new Book();

  constructor(private _bookService: BookService, 
    private _activatedRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoutes.paramMap.subscribe(
      () => {
        this.getBookInfo();
      }
    )
    
  }

  getBookInfo() {
    const id: number = +this._activatedRoutes.snapshot.paramMap.get('id');
     //Subscriure el observer book-list (consumidor) al observable bookService (suscriptor)
     this._bookService.get(id).subscribe (
      data => {
        this.book = data;
      }
    )

  }

}
