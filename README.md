# Ng-Sppro-Lightbox
A simple angular image lightbox.

Uses _ComponentFactoryResolver_ and injects component directly into DOM body

# installation
npm install ng-sppro-lightbox
npm install @conify-/icons-ic  //dependency 

# Usage
```
//import lightbox service into componennt
import { LightboxService  } from "ng-sppro-lightbox"; 

//Inject service 
constructor(
  private _lightboxService: LightboxService
) {...}

//Open lightbox
 this._lightboxService.open("https://images.pexels.com/photos/1987042/pexels-photo-1987042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
```

# Screenshot
![screenshot](https://raw.githubusercontent.com/SharePointPro/Sppro-Ng-Lightbox/main/screenshots/lightbox.PNG)
