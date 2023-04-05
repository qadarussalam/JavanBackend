import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public activeTab: string
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeTab = this.route.snapshot.firstChild?.data['activeTab'];
  }

}