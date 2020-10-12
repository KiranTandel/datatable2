import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public setLocalStorage() {
    localStorage.setItem('email', 'kiran@gmail.com');
    localStorage.setItem('password', 'kiran123');
  }
  public clearLocalStorage() {
    localStorage.clear();
  }

}
