import { Component, ViewEncapsulation } from '@angular/core';
import { UpdateService } from './services/update.service';

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
  constructor(private updateService:UpdateService){

  }

  displayContent(){
    this.display = true;
  }

  changeTabContent(tabName:string){
    switch(tabName){
      case 'Home':
        this.tab = 'Home';
        console.log("inside home tab");
        console.log("update service file name variable",this.updateService.name);
        
        
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
