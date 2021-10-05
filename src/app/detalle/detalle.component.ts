import { getLocaleDayNames } from '@angular/common';
import { literalMap } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { stringify } from 'querystring';
import { CharacterService } from '../Services/servicesCharacter';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

public personaje: Array<any>=[];
public Episodio:any;

  constructor(
    public dialogRef: MatDialogRef<DetalleComponent>,public srvCharacter:CharacterService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
       this.getCharacter(data);
     }
 
    onNoClick(): void {
      this.dialogRef.close();
    }
    getCharacter(valor:any)
    { 
      this.Episodio = valor.episodio;
      console.log(valor);
      let llamada;

      for (let index = 0; index < valor.data[0].length; index++) {

        let element = String(valor.data[0][index]).split('/').length-1;
        if(index == 0){
             llamada = String(valor.data[0][index]).split('/')[element];
        }else
        {
          llamada = llamada +"," + String(valor.data[0][index]).split('/')[element];;
        }
        
      }
   
       this.srvCharacter.getCharacter(llamada).then((param:any)=>{
        this.personaje = param;
      }); 
        
    }
}