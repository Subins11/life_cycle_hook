import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit , OnChanges , DoCheck, 
AfterContentInit , AfterContentChecked , AfterViewInit, AfterViewChecked , OnDestroy{

 @Input() value:string="Subin"

 constructor(){
  console.log("Constructor called")
  console.log(this.value)
 }

 ngOnChanges(change: SimpleChanges){
  console.log("ngOnChanges Called")
  console.log(change)
 }

 ngOnInit(){
  console.log("ngOnInit Called")
  console.log(this.value)
 }

ngDoCheck(){
  console.log("ngDoCheck Called")
}

ngAfterContentInit(){
  console.log("ngAfterContentInit Called")
}
ngAfterContentChecked(){
  console.log("ngAfterContentChecked Called")
}

ngAfterViewInit(){
  console.log("ngAfterViewInit called")
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked called")
} 
ngOnDestroy(){
  console.log("ngDestroy called")
}
}

