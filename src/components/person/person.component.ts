import { Component, Input } from "@angular/core";

@Component({
  selector: "person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"]
})
export class Person {
  @Input() person;
}
