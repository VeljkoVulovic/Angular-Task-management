import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() button?: string;
  btnName: string = 'Add task';
  btnClass: string = 'btn btn-green';
  btnLink: string = 'task/add/0';

  constructor() {}

  ngOnInit(): void {
    if (this.button === 'Back') {
      this.btnName = '';
      this.btnClass = 'cross-stand-alone';
      this.btnLink = '';
    }
  }
}
