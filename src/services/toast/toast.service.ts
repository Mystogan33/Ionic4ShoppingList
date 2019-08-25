import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable()
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  async show(message: string, duration: number = 3000) {
    let toast = await this.toastCtrl.create({
      message,
      duration
    });
    return await toast.present();
  };

}
