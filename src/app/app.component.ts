import { Component } from '@angular/core';
import { EpicService } from './Services/servicesEpic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba Tecnica';
  listEpic:any[];

    constructor(private srvEpic: EpicService){

      this.srvEpic.getlistEpisodio().then((res:any)=>{
        this.listEpic = res.results;
      });
    }

    
}
