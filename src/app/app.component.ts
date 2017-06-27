import {Component, OnInit} from '@angular/core';
import {AnimeService} from './anime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  anime = {
    title: '',
    type: ''
  };

  constructor(private animeService: AnimeService) {}

  changeTitle() {
    this.title = 'New Title!';
  }

  ngOnInit() {
    this.animeService.getAnime()
      .subscribe(
        anime => this.anime = anime,
        error => console.log(error));
  }
}
