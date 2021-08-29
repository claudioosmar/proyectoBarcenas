import { Injectable } from "@angular/core";
import { ConexionService, TypeRequest } from "src/app/services/conexion.service";

@Injectable()
export class AdministradorService{

    constructor(private conexionRest:ConexionService){

    }

    async login(user:String,pass:String):Promise<any>{
        const url = 'sesion/iniciarSesion';
        const peticionRest = this.conexionRest.peticionRest(url,TypeRequest.PUT);
        return peticionRest;
    }

}