import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class PeopleService {
  url: string = "https://randomuser.me/api/?results=10";
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get(this.url, httpOptions);
  }
}
