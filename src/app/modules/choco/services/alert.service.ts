import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public toastController: ToastController) { }
  public duration = 2000;

  public async show(message: string, color = 'dark') {
    const duration = this.duration;
    const toast = await this.toastController.create({
      message,
      duration,
      color
    });
    toast.present();
  }
}
