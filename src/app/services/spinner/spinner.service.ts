import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loader: any;

  constructor(public loadingCtrl: LoadingController) { }

  load() {
    this.loader = this.loadingCtrl.create({
    });
    
    this.loader.present();
  }

  dismiss() {
    if(this.loader){ this.loader.dismiss(); this.loader = null; }
  }

}
