import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Book} from '../models/Book.model';
import {BooksService} from '../services/books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubcription: Subscription;

  constructor(private bookservice: BooksService, private router: Router) { }

  ngOnInit() {
    this.booksSubcription = this.bookservice.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookservice.getBooks();
    this.bookservice.emitBook();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book) {
    this.bookservice.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy() {
    this.booksSubcription.unsubscribe();
  }

}
