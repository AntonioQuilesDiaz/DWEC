import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pokemones-page',
  templateUrl: './pokemones-page.component.html',
  styleUrls: ['./pokemones-page.component.css']
})
export class PokemonesPageComponent {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = '#2F2F2F';
  }
}
