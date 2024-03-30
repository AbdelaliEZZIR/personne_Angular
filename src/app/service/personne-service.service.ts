import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {PersonneClass} from '../classe/personne-class';

@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {

  constructor(private httpClient:HttpClient) { }
  
  getPersonne() {       
    return this.httpClient.get<PersonneClass[]>("http://localhost:8080/all" );
  }
  chercher(id : number) {       
    return this.httpClient.get<PersonneClass>("http://localhost:8080/chercher/"+id );
  }
  cree(personne:PersonneClass) {   
    return this.httpClient.post<PersonneClass>("http://localhost:8080/cree",personne );
  }

  modifier(personne:PersonneClass , id : number ) {   
    return this.httpClient.put<PersonneClass>("http://localhost:8080/modifie/"+id,personne );
  }

  supprimer(id : number) {   
    return this.httpClient.delete<PersonneClass>("http://localhost:8080/supprime/"+id );
  }
}
