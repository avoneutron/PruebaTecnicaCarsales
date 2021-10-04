import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class EpicService {
  

constructor(public http : HttpClient) {
    
}

  private path:any='https://rickandmortyapi.com/api/episode';


  getlistEpisodio() {
    return this.http.get(this.path).toPromise();
  }

}
