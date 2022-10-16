import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SeccompComponent } from './seccomp/seccomp.component';
import { ThirdcompComponent } from './thirdcomp/thirdcomp.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { NewpipePipe } from './newpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    SeccompComponent,
    ThirdcompComponent,
    DemopipesComponent,
    NewpipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
