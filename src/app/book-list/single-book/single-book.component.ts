import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/Book.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit() {
    this.book = new Book('', ''); // on créé un livre vide pour éviter les erreurs le temps de la lecture de la bdd
    const id = this.route.snapshot.params['id'];
    // +id => cast en tant que number
    this.booksService.getSingleBook(+id).then(
      (book: Book) => {
        this.book = book;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
