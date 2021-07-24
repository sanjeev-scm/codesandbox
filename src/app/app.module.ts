import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PeopleService } from "../services/people.service";

import { PeopleList } from "../components/people-list/people-list.component";
import { Person } from "../components/person/person.component";

@NgModule({
  declarations: [AppComponent, PeopleList, Person],
  imports: [BrowserModule, HttpClientModule],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
