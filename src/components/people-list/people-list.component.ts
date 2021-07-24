import { Component } from "@angular/core";

@Component({
  selector: "people-list",
  templateUrl: "./people-list.component.html",
  styleUrls: ["./people-list.component.css"]
})
export class PeopleList {
  people;
  isLoading;
  constructor() {}
}
