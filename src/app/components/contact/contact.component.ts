import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public styles = [
    {
      title: "Default",
      style: null
    },
    {
      title: "Domna",
      style: [
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#165c64"
            },
            {
              "saturation": 34
            },
            {
              "lightness": -69
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#b7caaa"
            },
            {
              "saturation": -14
            },
            {
              "lightness": -18
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#cbdac1"
            },
            {
              "saturation": -6
            },
            {
              "lightness": -9
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#8d9b83"
            },
            {
              "saturation": -89
            },
            {
              "lightness": -12
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#d4dad0"
            },
            {
              "saturation": -88
            },
            {
              "lightness": 54
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#bdc5b6"
            },
            {
              "saturation": -89
            },
            {
              "lightness": -3
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#bdc5b6"
            },
            {
              "saturation": -89
            },
            {
              "lightness": -26
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#c17118"
            },
            {
              "saturation": 61
            },
            {
              "lightness": -45
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#8ba975"
            },
            {
              "saturation": -46
            },
            {
              "lightness": -28
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#a43218"
            },
            {
              "saturation": 74
            },
            {
              "lightness": -51
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#ffffff"
            },
            {
              "saturation": 0
            },
            {
              "lightness": 100
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#ffffff"
            },
            {
              "saturation": 0
            },
            {
              "lightness": 100
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels",
          "stylers": [
            {
              "hue": "#ffffff"
            },
            {
              "saturation": 0
            },
            {
              "lightness": 100
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#ffffff"
            },
            {
              "saturation": 0
            },
            {
              "lightness": 100
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#3a3935"
            },
            {
              "saturation": 5
            },
            {
              "lightness": -57
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#cba923"
            },
            {
              "saturation": 50
            },
            {
              "lightness": -46
            },
            {
              "visibility": "on"
            }
          ]
        }
      ]
    },
    {
      title: "Gagnam",
      style: [
        {
          "featureType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "lightness": -100
            }
          ]
        }
      ]
    }
  ];

  public mapStyle;

  public center = {
    lat: 38.4318639,
    lng: 24.2517075
  };
  public mapZoom: number = 6;
  public departments = [
    {
      title: "ΙΕΚ ΔΕΛΤΑ 360° Θεσσαλονίκης",
      coordinates: {
        lat: 40.6350826,
        lng: 22.9427111
      }
    },
    {
      title: "ΙΕΚ ΔΕΛΤΑ 360° Ιωαννίνων",
      coordinates: {
        lat: 39.667467,
        lng: 20.8524265
      }
    },
    {
      title: "ΙΕΚ ΔΕΛΤΑ 360° Πάτρας",
      coordinates: {
        lat: 38.249665,
        lng: 21.7338435
      }
    },
    {
      title: "ΙΕΚ ΔΕΛΤΑ 360° Χανίων",
      coordinates: {
        lat: 35.5135366,
        lng: 24.0130289
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
