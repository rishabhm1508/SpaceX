import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { LaunchModel } from "../models/launch.model";

@Injectable({
  providedIn: "root",
})
export class SpaceXService {
  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<LaunchModel[]> {
    return this.http.get<LaunchModel[]>(`${environment.spaceXServiceRoot}`);
  }
}
