import {Component} from '@angular/core';
import {EpicService} from './Services/servicesEpic';
import {DetalleComponent} from './detalle/detalle.component';
import {MatDialog} from '@angular/material';
import {CharacterService} from './Services/servicesCharacter';



@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
    title = 'Prueba Tecnica';
    listEpic : any[];
    public personaje : any[] = [];

    pageSize : number;
    infPage: any[3]=[];

    constructor(private srvEpic : EpicService, private srvCharacter : CharacterService, public dialog : MatDialog) {

        this.srvEpic.getlistEpisodio().then((res : any) => {
          this.listEpic = res.results;
          this.pageSize = res.info.pages;
        });

        for (let index:number = 1; index < this.pageSize; index++) {
         this.infPage.push(index);
        }
       
    }

      public load(num:number):void{
        this.srvEpic.getlistEpisodioAvanzar(num).then((p:any)=>{
          this.listEpic = p.results;
        });
      }

    openDialog(valor : any[], episodio : any): void {

        let dialogRef = this.dialog.open(DetalleComponent, {
            height: '1000px',
            width: '500px',
            data: {
                'data': valor,
                'personaje': this.personaje,
                'episodio': episodio
            }

        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

        });
    }


}
