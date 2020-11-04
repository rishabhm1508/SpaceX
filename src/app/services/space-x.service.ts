import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SpaceXService {
  constructor(private http: HttpClient) {}

  getAllLaunches() {
    this.http
      .get("https://api.spaceXdata.com/v3/launches?limit=100")
      .subscribe((data) => {
        console.log(data);
      });
  }
}
