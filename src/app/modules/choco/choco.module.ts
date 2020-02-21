import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './components/form/form.component'
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LangService } from './services/lang.service';
import { ContextService } from './services/context.service';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListCrudComponent } from './components/list-crud/list-crud.component';

const DECLARATIONS = [
  FormComponent,
  MenuComponent,
  ListCrudComponent
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    LangService,
    ContextService
  ]
})
export class ChocoModule {
  static forRoot(): ModuleWithProviders<ChocoModule> {
    return {
      ngModule: ChocoModule
    };
  }
}
