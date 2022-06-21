import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/folder/inicio', icon: "home" },
    { title: 'favoritos', url: '/folder/folder/favoritos', icon: "people" },
    { title: 'compras', url: '/folder/folder/compras', icon: 'home' },
    { title: 'notificaciones', url: '/folder/folder/notificaciones', icon: 'home' },
    { title: 'smart-growing', url: '/folder/folder/smart-growing', icon: 'home' },
    { title: 'usuario', url: '/folder/folder/usuario', icon: 'person-circle' },
   
  ];
  
  
  constructor() {}
}
