import { Component, ElementRef, OnInit } from '@angular/core';
import { scaleInOutAnimation } from './animations/scale-in-out.animation';

@Component({
  selector: 'vex-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  animations: [scaleInOutAnimation]
})
export class LightboxComponent implements OnInit {

  imageUrl:string;
  
  constructor(private host: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
  }

  onClose(): void {
      this.host.nativeElement.remove();
  }

}

