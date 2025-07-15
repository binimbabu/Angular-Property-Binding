# PropertyBinding


Property binding that allows you to bind the properties of DOM elements to values in your component's class.


// In component.ts
export class AppComponent {
  imageUrl = 'https://example.com/logo.png';
}


<!-- In component.html -->
<img [src]="imageUrl">

This binds the src property of the <img> element to the imageUrl variable in the component. If imageUrl changes, the DOM updates automatically.
