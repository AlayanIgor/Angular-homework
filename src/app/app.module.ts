import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [AppComponent, FiltersComponent, PersonComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
