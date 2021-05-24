import { Component } from "@angular/core";

@Component({
  selector: 'app-image-formatter-cell',
  template: `<img border="0" width="100" height="100" src=\"{{ params.value }}\">` })

export class ImageFormatterComponent {
  params: any;
  agInit(params: any){
    this.params = params; 
  } 
}