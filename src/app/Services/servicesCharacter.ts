import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  

constructor(public http : HttpClient) {
    
}

  private path:any='https://rickandmortyapi.com/api/character/';
  getCharacter(id:any) {
    return this.http.get(this.path+id).toPromise();
  }

}
