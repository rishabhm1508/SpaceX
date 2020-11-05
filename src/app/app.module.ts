import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { LaunchFilterComponent } from './components/launch-filter/launch-filter.component';
import { RocketComponent } from './components/rocket/rocket.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LaunchFilterComponent, RocketComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
