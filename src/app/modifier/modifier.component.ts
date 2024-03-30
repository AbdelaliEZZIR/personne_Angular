import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {PersonneClass} from '../classe/personne-class';
import {PersonneServiceService} from '../service/personne-service.service';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  
  personne:PersonneClass = new PersonneClass();
  newpersonne:PersonneClass = new PersonneClass();
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private personneService:PersonneServiceService , private ref: MatDialogRef<ModifierComponent>) { }
  
  ngOnInit(): void {
    this.personneService.chercher(this.data.id).subscribe((response : PersonneClass)=> {
      this.personne = response;

      } )
  }
  
  closepopup() {
    this.ref.close('Closed using function');
  }

  enregistrer(id : number){
    this.personneService.modifier(this.personne,id).subscribe((response : PersonneClass)=> {
      
    } );
    this.closepopup()
  }

}
