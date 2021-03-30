import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
          label: 'Home',
          items: [{
                  label: 'Home', 
                  icon: 'pi pi-fw home',
                  routerLink:'home'
              }
          ]
      },
      {
          label: 'Terapeutas',
          icon: 'pi pi-fw pi-user',
          routerLink:'terapeutas'
      }
  ];
  }

}
