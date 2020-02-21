import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LangService } from './modules/choco/services/lang.service';

import route from 'src/app/modules/choco/globals/routes'
import { ContextService } from './modules/choco/services/context.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private lang: LangService,
    private context: ContextService
  ) {
    this.initializeApp();
    this.menu();
  }

  menu() {
    this.context.setCustom('menu', {
      items: [{
        name: this.lang.home,
        url: `/${route.home}`
      }]
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
