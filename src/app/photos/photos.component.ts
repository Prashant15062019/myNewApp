import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ImageFormatterComponent } from './imageformator.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  Photo:any=[];
  columnDefs = [
		{headerName: 'Album Id', field: 'albumId',sortable: true, filter: true, },
		{headerName: 'Id', field: 'id',sortable: true, filter: true },
		{headerName: 'Title', field: 'title',sortable: true, filter: true,width:300 },
		{headerName: 'Image',field: 'url', sortable: false, autoHeight: true,cellRendererFramework: ImageFormatterComponent,width:300},
		{headerName: 'CopyImage',field: 'thumbnailUrl', sortable: false, autoHeight: true,cellRendererFramework: ImageFormatterComponent}
	];

  constructor(private getDataService:GetDataService  ) {
    this.readPhoto();
   }

  ngOnInit(): void {
  }

  readPhoto(){
    this.getDataService.getPhoto().subscribe((data) => {
     this.Photo = data;
    })    
  }

}
