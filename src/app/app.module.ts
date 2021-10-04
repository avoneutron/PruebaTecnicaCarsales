import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './Services/services.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ServiceModule,
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
