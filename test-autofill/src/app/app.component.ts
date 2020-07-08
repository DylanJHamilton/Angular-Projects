import {Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { formatWithOptions } from 'util';
declare const google: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
  
  
export class AppComponent implements OnInit {
  title = 'App Component';  
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  private element: HTMLInputElement;
  addresses: string[] = ['Cannot Find Address? Click Here!'];

  
ngAfterViewInit(){
 
}
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.addresses.filter(option => option.includes(filterValue));
  }  

  
}
