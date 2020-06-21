import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result: Object = {card_title: '', address: ''}

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {

      // Empty in the beginning
      this.result = {card_title: 'Current location', address: ''}

  }

  async getAddress(){
    const mapModal = await this.modalCtrl.create({
      component: MapComponent
    });
    return await mapModal.present();

    mapModal.onDidDismiss().then((data) => {
      card_title: 'Selected location';
      address: data;
    })
  }

}
