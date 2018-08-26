import { Component, OnInit } from '@angular/core';
import { DeliveryMethods } from '../data-model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  public deliveryMethods: DeliveryMethods;

  constructor() { }

  ngOnInit() {
    this.deliveryMethods = ['pickup', 'delivery']
  }

}
