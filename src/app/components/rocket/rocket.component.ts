import { Component, Input, OnInit } from "@angular/core";
import { LaunchModel } from "src/app/models/launch.model";

@Component({
  selector: "app-rocket",
  templateUrl: "./rocket.component.html",
  styleUrls: ["./rocket.component.scss"],
})
export class RocketComponent implements OnInit {
  @Input() launch: LaunchModel;

  constructor() {}

  ngOnInit() {
    //console.log(this.launch);
  }
}
