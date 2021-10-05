import {Injectable, ɵclearResolutionOfComponentResourcesQueue} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({providedIn: 'root'})

export class CharacterService {


    constructor(public http : HttpClient) {}


   getCharacter(param : any) {
           return this.http.get<any>('https://rickandmortyapi.com/api/character/' + param).toPromise();
        }
}
