import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsPercentageComponent } from './components/skills-percentage/skills-percentage.component';
import { CirclePercentageComponent } from './components/circle-percentage/circle-percentage.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsPercentageComponent,
    CirclePercentageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
