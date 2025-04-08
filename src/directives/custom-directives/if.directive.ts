import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  // adding alias for the variable
  // @Input('appIf') set displayView(cond:boolean){
  //   if(cond){
  //     this.viewContainer.createEmbeddedView(this.template);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }

  // another way 
  @Input() set appIf(cond:boolean){
    if(cond){
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
