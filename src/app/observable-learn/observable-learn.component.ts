import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-learn',
  templateUrl: './observable-learn.component.html',
  styleUrls: ['./observable-learn.component.css']
})
export class ObservableLearnComponent {

  dataValues:any[] = [];

  // emiting an array by using the observable
  // myObservable = new Observable((observer)=>{
  //   observer.next([1,2,3,4,5])
  // })

  // emitting as a stream of data
  myObservable = new Observable((observer)=>{
    setTimeout(() => {observer.next(1)}, 1000);
    setTimeout(() => {observer.next(2)}, 2000);
    setTimeout(() => {observer.next(3)}, 3000);
    // setTimeout(() => {observer.error(new Error('Something Went Wrong'))}, 4000);
    setTimeout(() => {observer.next(4)}, 5000);
    setTimeout(() => {observer.next(5)}, 6000);
    setTimeout(() => {observer.complete()}, 7000);
  })

  // older version of subscribe method
  emitData(){
    this.myObservable.subscribe((data)=>{
      console.log("data",data);
      this.dataValues.push(data);
      console.log("dataValues",this.dataValues); 
    },
    (err)=>{
      alert(err.message);
    },
    ()=>{
      alert("All datas is streamed");
    }
  )
  }

  // new version of subscribe method
  emitDataNew(){
    this.myObservable.subscribe({
      next:(data:any)=>{
      console.log("data",data);
        this.dataValues.push(data); 
      console.log("dataValues",this.dataValues); 
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert("All datas is streamed");
      }
    })
  }
}
