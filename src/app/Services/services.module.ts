import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpicService } from './servicesEpic';
  

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [    
    EpicService
  ],
  declarations: []
})
export class ServiceModule { }
