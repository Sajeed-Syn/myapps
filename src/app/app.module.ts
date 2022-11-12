import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SimpleComponent } from './simple/simple.component';
import { MovieaddComponent } from './movieadd/movieadd.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SimpleComponent,
    MovieaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
