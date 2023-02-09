import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-anadir-mascotas',
  templateUrl: './anadir-mascotas.component.html',
  styleUrls: ['./anadir-mascotas.component.css']
})
export class AnadirMascotasComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = '#ffeac7';
  }
}
