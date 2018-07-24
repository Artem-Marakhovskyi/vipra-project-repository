import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  public options : any;

  constructor(
  ) {

  }

  ngOnInit(): void {
    this.options = {
      layers: [
        circle([ 50.059998, 36.169942 ], { radius: 200 }),
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
      ],
      zoom: 11.8,
      center: latLng(50.03, 36.21)
    };
  }
}
