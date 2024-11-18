import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }
   /* ngDoCheck is invoked by Angular whenever Angular thinks that a UI update might be needed.
      Avoid to use it because it will be invoked a lot. 
      */
   ngDoCheck() {
    console.log('ngDoCheck');
  }
// Template events.
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
// Template events.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
// Template events.
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
// Template events.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
