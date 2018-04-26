import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SegundaPage } from "../segunda/segunda";
import { DataService } from "../services/services";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data:any={
    nombre:"",
    email:"",
    telefono:"",
    comentario:""
  }

  constructor(public navCtrl: NavController, public userSrv:DataService) {
    this.userSrv.nombre="";
    this.userSrv.email="";
    this.userSrv.telefono;
    this.userSrv.comentario="";
  }

  Ingresar(){
    this.userSrv.nombre=this.data.nombre;
    this.userSrv.email=this.data.email;
    this.userSrv.telefono=this.data.telefono;
    this.userSrv.comentario=this.data.comentario;
    this.navCtrl.push(SegundaPage);
  }

}
