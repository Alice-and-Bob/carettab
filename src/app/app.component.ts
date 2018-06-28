import { Component } from '@angular/core';
import { transition, trigger, style, state, animate, query, group } from '@angular/animations';
import { SharedService } from './_shared/shared.service';
import { Storage } from './_storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('fade', [
      state('*', style({
        opacity: 1
      })),
      state('void',   style({
        opacity: 0
      })),
      transition('* => void', animate('250ms ease-out')),
      transition('void => *', animate('250ms ease-in'))
    ]),
    trigger('slideIn', [
      state('*', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('void',   style({
        opacity: 0,
        transform: 'translateX(20%)'
      })),
      transition('* => void', animate('250ms ease-out')),
      transition('void => *', animate('250ms ease-in'))
    ])
  ]
})
export class AppComponent {

  constructor(public shared: SharedService, public settings: Storage) {
  }

}
