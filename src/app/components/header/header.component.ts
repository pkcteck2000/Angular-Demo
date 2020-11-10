import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchWord = "";

  @Input() headerName;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem() {
    this.newItemEvent.emit(this.searchWord);
  }

  constructor() { }
  ngOnInit(): void {
  }

}
