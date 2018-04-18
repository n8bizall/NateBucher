import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-gdiwebsite',
  templateUrl: './gdiwebsite.component.html',
  styleUrls: ['./gdiwebsite.component.css']
})
export class GdiwebsiteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
