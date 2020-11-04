import { Component, OnInit } from "@angular/core";
import { YEARS } from "src/app/shared/space-x.constant";

@Component({
  selector: "app-launch-filter",
  templateUrl: "./launch-filter.component.html",
  styleUrls: ["./launch-filter.component.scss"],
})
export class LaunchFilterComponent implements OnInit {
  years = YEARS;
  constructor() {}

  ngOnInit() {}
}
