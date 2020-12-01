import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  modal;

  constructor(private loadingController: LoadingController) { }

  public deviceType(): string {
    const ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
      return 'mobile';

    else
      return 'desktop';
  }
  
  public async showloader() {
    this.modal =  await this.loadingController.create({
      message: 'Please wait...'
    })
    await this.modal.present();
  }

  public async dismissloader() {
    await this.modal.dismiss();
  } 


}
