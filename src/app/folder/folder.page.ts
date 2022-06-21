import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  slideOpts = {
    initiallSlide: 1,
    speed: 400,
    slidesPerView:2.5
  }
  catcards = [
    { title: 'Todos' },
    { title: 'modelos' },
    { title: 'Kits' },
    { title: 'Sustratos' },
    
   
  ]

  FakeArray = [1,1,1,1,1]
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
