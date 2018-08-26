import { Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IRecipe } from '../data-model';
import { RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  public deliveryMethods = ['pickup', 'delivery'];
  public recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {

  }

  public createForm() {
    this.recipeForm = this.fb.group({
      bsnNumber: '',
      prescriptionDate: '',
      endDate: '',
      deliveryMethod: 'pickup'
    });
  }

  public saveRecipe() {
    let recipe = <IRecipe>{
      bsn_number: this.recipeForm.get('bsnNumber').value,
      prescription_date: this.recipeForm.get('prescriptionDate').value,
      end_date: this.recipeForm.get('endDate').value,
      delivery_method: this.recipeForm.get('deliveryMethod').value
    }
    console.log(recipe);
    this.recipeService.saveRecipe(recipe).subscribe(response => {
      console.log("Got a response!");
      console.log(response);
    });
  }

  ngOnInit() {
    this.createForm();
  }

}
