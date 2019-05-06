import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
     searchStr: string;
     searchRes: Artist[];

    constructor(private _spotifyService:SpotifyService){

    }

    searchMusic(){
      this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
        this.searchRes = res.artists.items
      });
  }

}
