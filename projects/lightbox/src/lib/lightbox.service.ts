import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  EmbeddedViewRef,
  ApplicationRef,
  Injector
} from '@angular/core';
import { LightboxComponent } from './lightbox.component';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  open(url: string) {
    //Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(LightboxComponent)
      .create(this.injector);

    //Update image URL
    componentRef.instance.imageUrl = url;
    
    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.body.appendChild(domElem);

  }
}
