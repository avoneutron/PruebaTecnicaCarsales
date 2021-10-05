import { Component } from '@angular/core';
import { EpicService } from './Services/servicesEpic';
import { DetalleComponent } from './detalle/detalle.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba Tecnica';
  listEpic:any[];


    constructor(private srvEpic: EpicService,public dialog: MatDialog){

      this.srvEpic.getlistEpisodio().then((res:any)=>{
        this.listEpic = res.results;
      });
    }

    openDialog(): void {
      let dialogRef = this.dialog.open(DetalleComponent, {
        width: '250px',
        data: "Valor"
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
    }

    
}
