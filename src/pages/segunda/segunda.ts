import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from "../services/services";

/**
 * Generated class for the SegundaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda',
  templateUrl: 'segunda.html',
})
export class SegundaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userSrv:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaPage');
  }

}
