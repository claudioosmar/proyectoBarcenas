import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
/**
 * @class Clase de Conexion
 */
@Injectable()
export class ConexionService {
    private protocolo:string;
    private servidor:string;
    private cabeceras:HttpHeaders = new HttpHeaders;
    constructor(private http:HttpClient){
        this.protocolo = window.location.protocol;
        this.servidor = environment.host;
        this.cabeceras.set('','');
    }

/**
 * @description Metodo para realizar una petcion del tipo REST
 * @param url URL del servicio
 * @param tipoPeticion Metodo de peticion
 * @param json JSON de peticion en caso de ser requerido(Opcional)
 */
public peticionRest(url:string, tipoPeticion:TypeRequest,json?:JSON):Promise<any> {
    // Construccion de url final
    const urlFinal: string=this.protocolo+this.servidor+url;
    //Se crean las opciones para la peticion
    const opciones = {headers:this.cabeceras};
    // Seleccion de tipo de peticion
    switch (tipoPeticion) {
        case 1:
            return this.http.get<JSON>(urlFinal,opciones)
            .map((response: any) => {if (response !== null) { return response; } })
            .catch(this.errorHandler).toPromise();;
        case 2:
            return this.http.post<JSON>(urlFinal,null,opciones)
            .map((response: any) => {if (response !== null) { return response; } })
            .catch(this.errorHandler).toPromise();;
        case 3:
            if(json === null){
                return Promise.reject(EnumErrors.NO_JSON_FOUND);
            }
            return this.http.post<JSON>(urlFinal,json,opciones)
            .map((response: any) => {if (response !== null) { return response; } })
            .catch(this.errorHandler).toPromise();;
        case 4:
            return this.http.put<JSON>(urlFinal,null,opciones)
            .map((response: any) => {if (response !== null) { return response; } })
            .catch(this.errorHandler).toPromise();;
        case 5:
            if(json === null){
                return Promise.reject(EnumErrors.NO_JSON_FOUND);
            }
            return this.http.put<JSON>(urlFinal,json,opciones)
            .map((response: any) => {if (response !== null) { return response; } })
            .catch(this.errorHandler).toPromise();;
         case 6:
            return this.http.delete<JSON>(urlFinal,opciones)
            .map((response: any) => {if (response !== null) { return response; } })
            .catch(this.errorHandler).toPromise();;              
        default:
            return Promise.reject(EnumErrors.NO_METHOD_FOUND);
    }

}
errorHandler(error: HttpErrorResponse) {
    return ErrorObservable.create(error);
  }
 

}
/**
 * @enum TypeRequest
 */
export enum TypeRequest{
    GET = 1,
    POST = 2,
    POST_VALUES = 3,
    PUT = 4,
    PUT_VALUES=5,
    DELETE = 6
}
/**
 * @enum EnumErrors
 */
export enum EnumErrors{
    NO_JSON_FOUND =JSON.parse('{"error":"JSON no informado"}'),
    NO_METHOD_FOUND=JSON.parse('{"error":"Metodo no encontrado"}')
}