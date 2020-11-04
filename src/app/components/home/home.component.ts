import { Component, OnInit } from "@angular/core";
import { SpaceXService } from "src/app/services/space-x.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private spaceXService: SpaceXService) {}

  ngOnInit() {
    this.spaceXService.getAllLaunches();
  }
}
