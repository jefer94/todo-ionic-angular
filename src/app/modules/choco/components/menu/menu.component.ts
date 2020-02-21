import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LangService } from 'src/app/modules/choco/services/lang.service';
import { ContextService } from '../../services/context.service';
import { Router } from '@angular/router';

export type MenuItem = {
  name: string,
  url: string
}

@Component({
  selector: 'choco-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  user = 'Pablo'
  role = 'Cliente'
  
  items: MenuItem[];

  constructor(
    private menu: MenuController,
    private lang: LangService,
    context: ContextService,
    public router: Router,
  ) {
    const init = context.getCustom('menu');
    this.items = init.items;
    // this.auth.
  }
}