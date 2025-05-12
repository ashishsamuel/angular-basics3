import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfDirective } from 'src/directives/custom-directives/if.directive';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { ObservableLearnComponent } from './observable-learn/observable-learn.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDirective,
    Comp1Component,
    Comp2Component,
    UserListComponent,
    UserdisplayComponent,
    ObservableLearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
