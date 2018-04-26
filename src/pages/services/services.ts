import { Injectable } from "@angular/core";

@Injectable()

export class DataService {
    private _nombre:string;
    private _email:string;
    private _telefono:number;
    private _comentario:string;
    constructor() {
        
    }

    set nombre(newVal:string){
        this._nombre=newVal;
    }

    
    get nombre() : string {
        return this._nombre
    }

    
    set email(newVal : string) {
        this._email = newVal;
    }

    
    get email() : string {
        return this._email;
    }

    
    set telefono(newVal : number) {
        this._telefono = newVal;
    }
    
    
    get telefono() : number {
        return this._telefono;
    }
    
    
    set comentario(newVal : string) {
        this._comentario = newVal;
    }

    
    get comentario() : string {
        return this._comentario;
    }
    
    
       

}