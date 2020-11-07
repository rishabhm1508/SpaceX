import { Component, OnInit } from "@angular/core";
import { LaunchModel } from "src/app/models/launch.model";
import { SpaceXService } from "src/app/services/space-x.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  launches: LaunchModel[];
  constructor(private spaceXService: SpaceXService) {}

  ngOnInit() {
    this.spaceXService.getAllLaunches().subscribe((launches) => {
      this.launches = launches;
      launches.forEach((x, index) => {
        x.rocket.first_stage.cores.forEach( x=>{
          console.log(x.land_success + " id: " + index);
        })
      });
      let nulls = launches.filter((x) => x.rocket.first_stage === undefined);
      console.log(nulls);
    });
  }
}
