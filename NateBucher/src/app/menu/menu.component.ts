import { Component, OnInit } from '@angular/core';
import{ Menu } from './menu'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

menuItems: Menu[] = [
  new Menu ('Nate Bucher', '/home', 'The Home page'),
  new Menu('About', '/about', 'The About page'),
  new Menu('Resume', '/resume', 'The Resume page')
]


  constructor() { }

  ngOnInit() {
  }

}
