import { Component, OnInit } from '@angular/core';
import { Idea } from '../models/idea';


@Component({
  selector: 'ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.css']
})
export class IdeasListComponent implements OnInit {
  
  ideas : Idea[];

  constructor() { }

  ngOnInit() {
   this.ideas = [ 
      {id : 1, name : "Adoyo Pour Tous", description : "Entreprise de préparation de Adoyo au citronel sans sucre. Contenant du miel et thérapeutique",
      followers : 50, category : "COMMERCE" },
      { id : 2, name : "Lavage à domicile", description : "Création d'une entreprise offrant les services de lavage de vêtement, Moto, tapis, voitures à domicile.",
      followers : 40, category : "DOMESTIQUE" },
      { id : 3, name : "Sport pour tous!", description : "Offre de services de mises en conditions physique et de Gym à domicile pour se maintenir en bonne santé.",
      followers : 10, category : "SPORT" }
    ]
  }

}
