import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {PersonneServiceService} from '../service/personne-service.service';
import {PersonneClass} from '../classe/personne-class';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {
  personne:PersonneClass = new PersonneClass();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private personneService:PersonneServiceService , private ref: MatDialogRef<SupprimerComponent> ) { }

  ngOnInit(): void {
    this.personneService.chercher(this.data.id).subscribe((response : PersonneClass)=> {
      this.personne = response;

      } )
  }
  closepopup() {
    this.ref.close('Closed using function');
  }

  supprimer(){
    this.personneService.supprimer(this.personne.id).subscribe((response : PersonneClass)=> {
    } );
    this.closepopup()
  }

}
