import { Component, ElementRef, ViewChild } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-learn',
  templateUrl: './observable-learn.component.html',
  styleUrls: ['./observable-learn.component.css']
})
export class ObservableLearnComponent {

  dataValues:any[] = [];
  array1 = [1,3,5,7,9];
  array2 = ['A','B','C','D','E'];
  @ViewChild('createBtn')
  createBtn: ElementRef;

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
  // emitDataNew(){
  //   this.myObservable.subscribe({
  //     next:(data:any)=>{
  //     console.log("data",data);
  //       this.dataValues.push(data); 
  //     console.log("dataValues",this.dataValues); 
  //     },
  //     error(err){
  //       alert(err.message);
  //     },
  //     complete(){
  //       alert("All datas is streamed");
  //     }
  //   })
  // }

  // making an observable using of operator
  // ofObservable = of(this.array1,this.array2, 20, 10, 'hello', true);
  
  // subscribing to the ofObservable
  // emitDataNew(){
  //   this.Observable.subscribe({
  //     next: (data:any)=>{
  //       console.log("data",data);
  //       this.dataValues.push(data);
  //     },
  //     error(err){
  //       alert(err.message);
  //     },
  //     complete(){
  //       alert("all datas are streamed");
  //     }
  //   })
  // }

  // making an observable using from opertor
  // fromObservable = from(this.array1);

  // assigning string value as an argument to the from operator
  // fromObservable = from('23456789');

  // subscribing to the fromObservable
  emitDataNew(){
    this.fromObservable.subscribe({
      next: (data:any)=>{
        console.log("data",data);
        this.dataValues.push(data);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert("all datas are streamed");
      }
    })
  }

  // converting an promise to an observable using from operator
  promise = new Promise((resolve,reject)=>{
    resolve([10,20,30,40,50,60])
  })

  fromObservable = from(this.promise)

  // fromevent operator
  // helps us to create an observable from a DOM event
}
