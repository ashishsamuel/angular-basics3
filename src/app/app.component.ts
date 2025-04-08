import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-basics3';

  display: boolean = false;
  tab: string = '';

  displayContent(){
    this.display = true;
  }

  changeTabContent(tabName:string){
    switch(tabName){
      case 'Home':
        this.tab = 'Home';
        console.log("inside home tab");
        
        break;
      case 'About':
        this.tab = 'About';
        break;
      case 'Research':
        this.tab = 'Research';
        break;
      case 'Facts':
        this.tab = 'Facts';
        break;
        
    }
    
      

  }
}
