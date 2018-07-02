import { Component, OnInit } from '@angular/core';

import { IFormation } from 'src/app/model/formation';
import { ICycleFormation } from '../../model/cycle-formation';

@Component({
  selector: 'app-contenu-cycle-formation',
  templateUrl: './contenu-cycle-formation.component.html',
  styleUrls: ['./contenu-cycle-formation.component.css']
})
export class ContenuCycleFormationComponent implements OnInit {


  formationsDebutants : IFormation[];
  formationsDebutantsFiltree :  IFormation[];

  formationsIntermediaires : IFormation[];
  formationsIntermediairesFiltree :  IFormation[];

  formationsAvancees : IFormation[];
  formationsAvanceesFiltree :  IFormation[];
  cycleDeFormation : ICycleFormation;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');

    this.cycleDeFormation = {
      id: '1',
      nom: 'Javascript',
      image: 'https://www.shareicon.net/data/128x128/2016/07/06/106573_software_512x512.png',
      description: 'JavaScript is the most widely deployed language in the world. (uniquement des valeurs en durs ...'
    };


    this.formationsDebutants =
    [
      {
        id: '1',
        nom: 'formation debutant 1',
        description: 'description 1'},
      {id: '2',
        nom: 'formation debutant 2',
        description: 'description 2'}
    ];
    this.formationsDebutantsFiltree = this.formationsDebutants;
  

    this.formationsIntermediaires =
    [
      {
        id: '1',
        nom: 'formation intermédiaire 1',
        description: 'description formation intermédiaire 1'},
      {
        id: '2',
        nom: 'formation intermédiaire 2',
        description: 'description formation intermédiaire 2'},
      {
        id: '3',
        nom: 'formation intermédiaire 3',
         description: 'description formation intermédiaire 3'}
    ];

    this.formationsIntermediairesFiltree = this.formationsIntermediaires;

    this.formationsAvancees = 
    [
      {
        id: '1',
        nom: 'formation avancee 1',
        description: 'description formation avancee 1'},
      {id: '2',
        nom: 'formation avancee 2',
        description: 'description formation avancee 2'}
    ];
    this.formationsAvanceesFiltree = this.formationsAvancees;

  }

}
