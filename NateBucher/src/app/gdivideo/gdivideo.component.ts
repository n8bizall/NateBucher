import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-gdivideo',
  templateUrl: './gdivideo.component.html',
  styleUrls: ['./gdivideo.component.css']
})
export class GdivideoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
