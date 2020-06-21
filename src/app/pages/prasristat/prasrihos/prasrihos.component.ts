import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-prasrihos',
  templateUrl: './prasrihos.component.html',
  styleUrls: ['./prasrihos.component.scss']
})
export class PrasrihosComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
 
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
