import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {PersonneServiceService} from './service/personne-service.service';
import {PersonneClass} from './classe/personne-class';
import {ModifierComponent} from './modifier/modifier.component';
import {SupprimerComponent} from './supprimer/supprimer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Personne_Angular';
  personnes : PersonneClass[] = [];
  newpersonne:PersonneClass = new PersonneClass();
  constructor(private personneService:PersonneServiceService,private matDialog:MatDialog ){}
  
  ngOnInit(): void {
    this.getPersonne();
  }

  getPersonne(){
    this.personneService.getPersonne().subscribe((response : PersonneClass[])=> {
      this.personnes = response;

      } )
  }
  ajouter() { 
    this.personneService.cree(this.newpersonne).subscribe((response : PersonneClass)=> {
      this.getPersonne();
      } );
  
  }
  supprimer(id:number){

    this.matDialog.open(SupprimerComponent,{
      width: '20%',
      data: {
        id : id
      }
    }).afterClosed().subscribe(item => {
      this.getPersonne();
    })
  }
  
  modifier(id:number){
    this.matDialog.open(ModifierComponent,{
      width: '20%',
      data: {
        id : id
      }
    }).afterClosed().subscribe(item => {
      this.getPersonne();
    })
    
  }
}
